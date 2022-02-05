import { Avatar, Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Search } from "../input/Search";

export const Header = () => {

    const nav = useNavigate();

    return (
        <Box component="div" sx={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            width: "100%"
        }}>
            <Stack direction="row" p={2} sx={{ width: "60%" }} justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={2} alignItems="center">
                    <Search />
                    <Box>
                        <Button color="secondary" size="small" onClick={() => nav("/")}>Explore</Button>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                    <Box>
                        <Button size="small" onClick={() => nav("/mint")}>Create</Button>
                    </Box>
                    <Avatar />
                </Stack>
            </Stack>
        </Box>
    );
}