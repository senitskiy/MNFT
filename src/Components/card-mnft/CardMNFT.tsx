import React from "react";
import { Paper as MuiPaper, Box, Stack, Avatar, Typography, Button, Select, MenuItem, FormControl, InputLabel, styled } from "@mui/material";
import { Image } from './../image/Image';
import { useLocation, useNavigate } from 'react-router-dom';
import { CellUser } from './../cell-user/CellUser';

const Paper = styled(MuiPaper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundImage: "none",
    backgroundColor: theme.palette.grey[900],
}))

export const CardMNFT = () => {

    const nav = useNavigate();
    const { pathname,  } = useLocation()

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
                <Typography variant="h2" align="left" sx={{ width: "100%" }} p={1}>Name of composition</Typography>
                <Typography variant="h3" align="left" sx={{ width: "100%" }} p={1}>100$ - 1$/day</Typography>
                <Stack direction="row" spacing={1}>
                    <Button sx={{
                        backgroundColor: "#414144",
                        color: "text.primary",
                        fontWeight: 700
                    }}>Rent AD</Button>
                    <Button variant="text" onClick={() => nav('/mnft')}>View more</Button>
                </Stack>
            </Box>
        </Paper>
    );
}