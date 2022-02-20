import React, { useEffect, useState, useContext } from "react";
import Promise from "bluebird";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { Avatar, Box, Button, CircularProgress, Dialog, Paper, Stack, styled, Typography } from "@mui/material";
import { MNFTForm } from "../Pages/MNFT/create/CreateMNFT";
import { renameFile } from './../Components/utils/renameFile';

import abi from "../contract/contract.json";
import bs from "../contract/contract_bs.json";
import { AccountContext } from './../context/AccountState';
import { Icon28DoneOutline } from "@vkontakte/icons";
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { CreateMnftMutation, CreateMnftMutationVariables, MutationUpdateMnftArgs, UpdateMnfMutation } from "../../graphql/generated";
import { RentFormMNFT } from "../Pages/MNFT/rent/RentMNFT";

interface ProcessedRentMNftProps {
    open: boolean,
    onClose: () => void,
    form: RentFormMNFT
}

type Step = "upload" | "changeMNFT" | "approveMNFT" | null;

interface ContactMNFT {
    address: string,
    MNFT: any
}

const UPDATE_MNFT = gql`
mutation UpdateMNF($address: String!, $input: MNFTInput) {
  updateMNFT(address: $address, input: $input) {
    ok
  }
}
`;

export const ProcessedRentMnft = ({ open, onClose, form }: ProcessedRentMNftProps) => {
    const { account } = useContext(AccountContext)
    const [updateMNFT] = useMutation<UpdateMnfMutation, MutationUpdateMnftArgs>(UPDATE_MNFT);
    const [step, updateStep] = useState<Step>(null);

    async function uploadToIPFS(): Promise<{ cidImage: string }> {
        const client = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_KEY });
        // const imageFile = renameFile(form.image, "0");
        // const cidImage = await client.put([imageFile]);
        // const payload = {
        //     name: form.name,
        //     description: form.description,
        //     image: "ipfs://" + cidImage + "/0"
        // }

        const dataURL = form.stageRef.current.toDataURL({ pixelRatio: 2 });
        console.log(dataURL);

        const res = await fetch(dataURL);
        const blob = await res.blob();
        const file = new File([blob], "0", { type: "image/png" })
        const cidImage: string = await client.put([file]);
        return {
            // cidJson: payloadCid,
            cidImage: cidImage + "/0"
        };
    }

    async function deployMNFT(cid: string): Promise<ContactMNFT> {
        return new Promise((resolve, reject) => {
            if (!account) reject();
            if (!account.web3) reject();


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
                // console.log(hash);
            }).on("receipt", async (receiptMint) => {
                resolve({
                    MNFT,
                    address: receiptMint.contractAddress
                });
            }).on("error", (err: any) => {
                onClose()
            });
        });
    }

    async function mintMNFT(contract: ContactMNFT) {
        const res = await account.web3!.eth.sendTransaction({
            to: contract.address,
            from: account.address!,
            data: contract.MNFT.methods.mint().encodeABI(),
            gas: 3000000,
        });
    }

    async function createMNFT(contract: ContactMNFT, cid: string) {
        await account.web3!.eth.sendTransaction({
            to: contract.address,
            from: account.address,
            data: contract.MNFT.methods.create_M_NFT(
                0,
                "ipfs://" + cid + "/0",
                "ipfs://" + cid + "/0",
                1644115473
            ).encodeABI(),
            gas: 3000000,
        })
    }

    useEffect(() => {
        async function changeMnft() {
            updateStep("upload");
            const { cidImage } = await uploadToIPFS();
            console.log(cidImage);
            // updateStep("mint");
            // await mintMNFT(receiptMint);
            // updateStep("create_mnft");
            // await createMNFT(receiptMint, cidJson);
            // updateStep("approveMNFT");
            // await approveMNFT(receiptMint, cidJson, cidImage);
            onClose();
        }

        if (open) {
            changeMnft()
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
                        {step === "changeMNFT" ? <CircularProgress /> : <Icon28DoneOutline height={44} width={44} />}
                        <Typography color="text.primary">Change MNFT</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        {step === "approveMNFT" ? <CircularProgress /> : <Icon28DoneOutline height={44} width={44} />}
                        <Typography color="text.primary">Approve MNFT</Typography>
                    </Stack>
                    {!open &&
                        <Box>
                            <Button onClick={onClose}>close</Button>
                        </Box>
                    }
                </Stack>
            </Box>
        </Dialog>
    );
}