import { Avatar, Button, AppBar, Stack, Toolbar, styled, InputBase, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../input/Search";
export const Header = () => {

    const [id, setId] = useState(undefined);
    const nav = useNavigate();
    useEffect(() => {
        setId(localStorage.getItem("account"))
    }, [])

    return (
        <AppBar position="fixed" elevation={0} color="transparent" enableColorOnDark>
            {/* <Stack direction="row" p={2} sx={{ width: "60%" }} justifyContent="space-between" alignItems="center">
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
                {id}
            </Stack> */}
            <Toolbar>
                    <Search placeholder="Search NFTs" />
                    <Button variant="text" onClick={() => nav("/")}>Explore</Button>
                    <Button variant="text" color="secondary" onClick={() => nav("/create")}>Create</Button>
            </Toolbar>
        </AppBar>
    );
}