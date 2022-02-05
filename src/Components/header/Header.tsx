import { Avatar, Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Search } from "../input/Search";

export const Header = () => {

    const nav = useNavigate();

    return (
        <Box component="div" sx={{
            position: "fixed",
            justifyContent: "space-between",
            width: "100%"
        }}>
            <Stack direction="row" p={2} justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={2}>
                    <Search />
                    <Button>Explore</Button>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <Button onClick={() => nav("/mint")}>Create</Button>
                    <Avatar />
                </Stack>
            </Stack>
        </Box>
    );
}