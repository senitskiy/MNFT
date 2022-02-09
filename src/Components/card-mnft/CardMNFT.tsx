import React from "react";
import { Paper as MuiPaper, Box, Stack, Avatar, Typography, Button, Select, MenuItem, FormControl, InputLabel, styled } from "@mui/material";

const Paper = styled(MuiPaper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundImage: "none",
    backgroundColor: theme.palette.grey[900],
}))

const TypographyNickname = styled(Typography)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
});

const CellUser = () => {
    return (
        <Stack maxWidth={150} spacing={1}>
            <Typography variant="subtitle2" color="text.secondary">AD LORD</Typography>
            <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                <Avatar src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32" sx={{ height: 36, width: 36 }} />
                <TypographyNickname>@mikeandpicture</TypographyNickname>
            </Stack>
        </Stack>
    );
}

export const CardMNFT = () => {
    return (
        <Paper sx={{
            borderRadius: 6
        }}>
            <Box p={2} component="div" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 300
            }}>
                <Stack direction="row" spacing={1}>
                    <CellUser />
                    <CellUser />
                </Stack>
                <Box
                    mt={2}
                    width={300}
                    height={300}
                    sx={{
                        backgroundImage: `url(https://ipfs.io/ipfs/bafybeig7nf2glzhanp5ecwh42qjv6cp42tj77u4sjdigox623hlap3n3xe/0)`,
                        backgroundColor: "#414144",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        borderRadius: 6
                    }}
                >
                </Box>
                <Typography variant="h4" align="left" sx={{ width: "100%" }} p={2}>Name of composition</Typography>
                <Stack direction="row" spacing={1}>
                    <Box>
                        <FormControl sx={{ height: 10, minWidth: 120 }}>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                placeholder="1 week"
                                defaultValue={1}
                                sx={{
                                    height: 36,
                                }}
                            >
                                <MenuItem value={1}>1 week</MenuItem>
                                <MenuItem value={2}>2 weel</MenuItem>
                                <MenuItem value={3}>3 week</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button sx={{
                        backgroundColor: "#414144",
                        color: "text.secondary",
                        fontWeight: 700
                    }}>1.1 ETH</Button>
                    <Button variant="contained" sx={{ fontWeight: 700, textTransform: "none" }}>Apply</Button>
                </Stack>
            </Box>
        </Paper>
    );
}