import React, { useEffect, useState, useContext } from "react";
import Promise from "bluebird";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { Avatar, Box, CircularProgress, Dialog, Paper, Stack, styled, Typography } from "@mui/material";
import { MNFTForm } from "../Pages/MNFT/create/CreateMNFT";
import { renameFile } from './../Components/utils/renameFile';

import abi from "../contract/contract.json";
import bs from "../contract/contract_bs.json";
import { AccountContext } from './../context/AccountState';
import { Icon28DoneOutline } from "@vkontakte/icons";

interface ProcessedCreateNftProps {
    open: boolean,
    onClose: () => void,
    form: MNFTForm
}

type Step = "upload" | "deploy" | "mint" | null;

export const ProcessedCreateNft = ({ open, onClose: close, form }: ProcessedCreateNftProps) => {
    const { account } = useContext(AccountContext)
    // const [cidPayloadIPFS, setCidPayloadIPFS] = useState(""); 
    const [step, updateStep] = useState<Step>(null);
    let promiseUploadToIPFS: Promise | null = null;

    async function uploadToIPFS(): Promise<string> {
        const client = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_KEY });
        const imageFile = renameFile(form.image, "0");
        const cidImage = await client.put([imageFile]);
        const payload = {
            name: form.name,
            description: form.description,
            image: "ipfs://" + cidImage + "/0"
        }

        const payloadFile = new File([
            new Blob([
                JSON.stringify(payload)
            ], {
                type: "text/plain;charset=utf-8"
            })
        ], "payload_mnft.json");

        const payloadCid: string = await client.put([payloadFile]);
        return payloadCid;
    }

    async function deployMNFT(cid: string) {
        console.log(cid);

        if (!account) return;
        if (!account.web3) return;

        //@ts-ignore
        const MNFT = new account.web3.eth.Contract(abi, account.address, {
            from: account.address,
            gas: 3000000,
        });

        MNFT.deploy({
            data: bs.object
        }).send({
            from: account.address!,
            gas: 3000000,
        }, (err: any, hash) => {
            console.log(hash);
        }).on("receipt", async (receiptMint) => {
            const res = await account.web3!.eth.sendTransaction({
                to: receiptMint.contractAddress,
                from: account.address!,
                data: MNFT.methods.mint().encodeABI(),
                gas: 3000000,
            })
            console.log("res", res.logs[0]);
        }).on("error", (err: any) => {
            console.log(err);
        });
    }

    async function onClose() {
        promiseUploadToIPFS?.cancel();
        close();
    }

    useEffect(() => {
        async function createMnt() {
            updateStep("upload");
            const cid = await uploadToIPFS();
        }

        if(open) {
            createMnt()
        }
    }, [open]);
    
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderRadius: 8
                }
            }}
        >
                <Box p={5}>
                    <Stack direction="column" spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {step === "upload" ? <CircularProgress /> : <Icon28DoneOutline height={44} width={44} />}
                            <Typography color="text.primary">Upload to IPFS</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={2}>
                            {step === "deploy" ? <CircularProgress  /> : <Icon28DoneOutline height={44} width={44} />}
                            <Typography color="text.primary">Deploy</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={2}>
                            {step === "mint" ? <CircularProgress  /> : <Icon28DoneOutline height={44} width={44} />}
                            <Typography color="text.primary">Mint</Typography>
                        </Stack>
                    </Stack>
                </Box>
        </Dialog>
    );
}