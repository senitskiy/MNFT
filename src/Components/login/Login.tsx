import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountState";

export const Login = () => {

    const { connect } = useContext(AccountContext);

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 64px)"
        }}>
            <Button onClick={connect} variant="contained">Connect Metamask</Button>
        </Box>
    );
};