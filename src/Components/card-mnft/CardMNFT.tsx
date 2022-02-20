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

interface CardMNFTProps {
    address?: string
    name?: string,
    cost?: number,
    costAd?: number,
    image?: string,
    sponsor?: {
        address: string,
        name?: string
    },
    owner?: {
        address: string,
        name?: string
    }   
}

export const CardMNFT = (props: CardMNFTProps) => {
    const { name, cost, costAd, image, address, sponsor, owner } = props;
    const nav = useNavigate();
    const { pathname } = useLocation()

    return (
        <Paper sx={{
            borderRadius: 8,
        }}>
            <Box
                p={1}
                component="div"
                sx={{
                    width: 400,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Stack direction="row" width={400} spacing={1} p={1}>
                    <CellUser
                        title="Owner"
                        name={owner?.name ? `@${owner?.name}` : owner?.address}
                        image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                    />
                    {sponsor && <CellUser
                        name={sponsor?.name ? `@${sponsor?.name}` : sponsor?.address}
                        title="Sponsor"
                        image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                    />}
                </Stack>
                <Image src={`https://ipfs.io/ipfs/${image?.split("//")[1]}`} width={300} height={300} />
                <Typography variant="h2" align="left" sx={{ width: "100%" }} p={1}>{name}</Typography>
                <Typography variant="h3" align="left" sx={{ width: "100%" }} p={1}>{cost}$ - {costAd}$/day</Typography>
                <Stack direction="row" spacing={1}>
                    <Button onClick={() => nav('/rent/' + address, { state: props })} sx={{
                        backgroundColor: "#414144",
                        color: "text.primary",
                        fontWeight: 700
                    }}>Rent AD</Button>
                    <Button variant="text" onClick={() => nav('/mnft/' + address, { state: props })}>View more</Button>
                </Stack>
            </Box>
        </Paper>
    );
}