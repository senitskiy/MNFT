import React, { useEffect, useState, useContext } from "react";
import Promise from "bluebird";
import { Avatar, Box, Button, CircularProgress, Dialog, Paper, Stack, styled, Typography } from "@mui/material";
import { renameFile } from './../Components/utils/renameFile';
import { AccountContext } from './../context/AccountState';
import { Icon28DoneOutline, Icon56ErrorOutline } from "@vkontakte/icons";

interface ModalErrorProps {
    open: boolean,
    onClose: () => void
}

export const ModalError = ({ open, onClose }: ModalErrorProps) => {
    const { account } = useContext(AccountContext)
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
                    <Icon56ErrorOutline fill="red" />
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