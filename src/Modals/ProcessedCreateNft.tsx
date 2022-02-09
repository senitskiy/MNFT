import React, { useEffect, useState } from "react";
import { Avatar, Box, CircularProgress, Dialog, Paper, Stack, styled, Typography } from "@mui/material";
import { MNFTForm } from "../Pages/MNFT/create/CreateMNFT";

interface ProcessedCreateNftProps {
    open: boolean,
    onClose: () => void,
    payload: MNFTForm
}

interface Step {
    title: string,
    loading?: boolean,
    success?: boolean,
    error?: string
}

const initSteps: Step[] = [
    {
        title: "Upload to IPFS"
    },
    {
        title: "Deploy Contract"
    },
    {
        title: "Mint NFT"
    }
];

export const ProcessedCreateNft = ({ open, onClose }: ProcessedCreateNftProps) => {

    const [cidPayloadIPFS, setCidPayloadIPFS] = useState(""); 
    const [steps, updateSteps] = useState<Step[]>(initSteps);


    // async function uploadDataToIPFS() {
    //     console.log(form);
    // }

    useEffect(() => {
        if(open) {
            console.log("start create MNFT");
        }
    }, [open]);
    
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Paper>
                <Box p={3}>
                    <Stack direction="column" spacing={1}>
                        {
                            steps.map(() => {
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <CircularProgress />
                                    <Typography>Mint NFT</Typography>
                                </Stack>
                            })
                        }
                    </Stack>
                </Box>
            </Paper>
        </Dialog>
    );
}