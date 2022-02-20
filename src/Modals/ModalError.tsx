import React, { useEffect, useState, useContext } from "react";
import Promise from "bluebird";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  Paper,
  Stack,
  styled,
  Typography,
  Link,
} from "@mui/material";
import { renameFile } from "./../Components/utils/renameFile";
import { AccountContext } from "./../context/AccountState";
import { Icon28DoneOutline, Icon56ErrorOutline } from "@vkontakte/icons";
import { Link as LinkRouter } from "react-router-dom";
import qr from "./../static/image/qr.jpg";
import { display } from "@mui/system";

interface ModalErrorProps {
  open: boolean;
  onClose: () => void;
}

export const ModalError = ({ open, onClose }: ModalErrorProps) => {
  const { account } = useContext(AccountContext);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 8,
        },
      }}
    >
      <Box p={5}>
        <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
          <Icon56ErrorOutline fill="red" />
          <div>
              <img
                src={qr}
                alt="telegram"
                style={{ width: "400px", height: "400px", }}
              />
            </div>
          <Typography variant="h3">
            Ooops... We have a problem! Contact us in{" "}
            <Link href="https://t.me/+JGRyKE8A4xA5ZGFi" target="_blank">
              telegram
            </Link>
            
          </Typography>
          {!open && (
            <Box>
              <Button onClick={onClose}>close</Button>
            </Box>
          )}
        </Stack>
      </Box>
    </Dialog>
  );
};
