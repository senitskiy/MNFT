import React from "react";
import { Paper as MuiPaper, Box, Stack, Avatar, Typography, Button, Select, MenuItem, FormControl, InputLabel, styled } from "@mui/material";
import { Image } from './../image/Image';
import { useNavigate } from 'react-router-dom';
import { CellUser } from './../cell-user/CellUser';

const Paper = styled(MuiPaper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundImage: "none",
    backgroundColor: theme.palette.grey[900],
}))

export const CardMNFT = () => {

    const nav = useNavigate();

    return (
        <Paper sx={{
            borderRadius: 8,
        }}>
            <Box
                p={1}
                component="div"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Stack direction="row" spacing={1} p={1}>
                    <CellUser
                        title="Owner"
                        name="@semgoSE"
                        image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                    />
                    <CellUser
                        name="@mediacontent"
                        title="Sponsor"
                        image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                    />
                </Stack>
                <Image src="https://ipfs.io/ipfs/bafybeig7nf2glzhanp5ecwh42qjv6cp42tj77u4sjdigox623hlap3n3xe/0" width={300} height={300} />
                <Typography variant="h4" align="left" sx={{ width: "100%" }} p={1}>Name of composition</Typography>
                <Typography variant="h5" align="left" sx={{ width: "100%" }} p={1}>100$</Typography>
                <Button variant="text" onClick={() => nav("/mnft")}>Подробнее</Button>
                {/* <Stack direction="row" spacing={1}>
                    <Button sx={{
                        backgroundColor: "#414144",
                        color: "text.secondary",
                        fontWeight: 700
                    }}>1.1 ETH</Button>
                    <Button variant="contained" sx={{ fontWeight: 700, textTransform: "none" }}>Apply</Button>
                </Stack> */}
            </Box>
        </Paper>
    );
}