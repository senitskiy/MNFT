import React, { useEffect, useState, useContext } from "react";
import Promise from "bluebird";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { Avatar, Box, Button, CircularProgress, Dialog, Paper, Stack, styled, Typography } from "@mui/material";
import { MNFTForm } from "../Pages/MNFT/create/CreateMNFT";
import { renameFile } from './../Components/utils/renameFile';

import bs from "../contracts/artifacts/M_NFT.json";
import abi from "../contracts/artifacts/M_NFT_metadata.json";
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

    async function uploadToIPFS(): Promise<{ cidImage: string, cidJson: string }> {
        const client = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_KEY });
        // const imageFile = renameFile(form.image, "0");
        // const cidImage = await client.put([imageFile]);
        const dataURL = form.stageRef.current.toDataURL({ pixelRatio: 2 });
        console.log(dataURL);

        const res = await fetch(dataURL);
        const blob = await res.blob();
        const file = new File([blob], "0", { type: "image/png" })
        const cidImage: string = await client.put([file]);

        const payload = {
            name: form.mnft.name,
            description: form.mnft.description,
            image: "ipfs://" + cidImage + "/0"
        }

        const payloadFile = new File([
            new Blob([
                JSON.stringify(payload)
            ], {
                type: "text/plain;charset=utf-8"
            })
        ], "0");

        const payloadCid: string = await client.put([payloadFile]);

        return {
            cidJson: payloadCid,
            cidImage: cidImage + "/0"
        };
    }

    async function changeMNFT(cid: string): Promise<ContactMNFT> {
        return new Promise(async (resolve, reject) => {
            console.log(account);
            if (!account) reject();
            if (!account?.web3) {
                reject();
                return;
            }

            //@ts-ignore
            const MNFT = new account.web3.eth.Contract(abi.output.abi, form.mnft.address, {
                from: account.address,
                gas: 3000000,
            });

            console.log(0, `ipfs://${cid}/0`, form.timeStart.getTime(), form.timeEnd.getTime());

            const res = await account.web3!.eth.sendTransaction({
                to: form.mnft.address,
                from: account.address!,
                data: MNFT.methods.change_M_NFT(0, `ipfs://${cid}/0`, form.timeStart.getTime()/1000, form.timeEnd.getTime()/1000).encodeABI(),
                gas: 3000000,
            });
            resolve();
        });
    }


    useEffect(() => {
        async function init() {
            updateStep("upload");
            const { cidJson, cidImage } = await uploadToIPFS();
            updateStep("changeMNFT"); 
            await changeMNFT(cidJson)
            updateStep("approveMNFT"); 
            await updateMNFT({
                variables: {
                    address: form.mnft.address,
                    input: {
                        address: form.mnft.address,
                        image: `ipfs://${cidImage}`,
                        sponsor: account.address
                    }
                }
            })
            onClose();
        }

        if (open) {
            init()
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