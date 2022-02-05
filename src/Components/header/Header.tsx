import { Avatar, Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Search } from "../input/Search";

export const Header = () => {

    const nav = useNavigate();

    return (
        <Box component="div" sx={{
            position: "fixed"
        }}>
            <Stack sx={{ width: "70%" }} direction="row" justifyContent="space-between" alignItems="center">
                <Search />
                <Stack direction="row" spacing={2}>
                    <Button>Explore</Button>
                    <Button onClick={() => nav("/mint")}>Create</Button>
                    <Avatar />
                </Stack>
            </Stack>
        </Box>
    );
}