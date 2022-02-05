import { Avatar, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Search } from "../input/Search";

export const Header = () => {

    const nav = useNavigate();

    return (
        <Box mt={3} sx={{
            position: "fixed",
            display: "flex",
            width: "100%",
            justifyContent: "center"
        }}>
            <Stack sx={{  width: "70%" }} direction="row" justifyContent="space-between" alignItems="center">
                <Search />
                <Stack direction="row">
                    <Button>Explore</Button>
                    <Button onClick={() => nav("/mint")}>Create</Button>
                    <Avatar />
                </Stack>
            </Stack>
        </Box>
    );
}