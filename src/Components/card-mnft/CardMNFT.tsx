import React from "react";
import { Paper, Box, Stack, Avatar, Typography, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const CardMNFT = () => {
    return (
        <Paper sx={{
            backgroundColor: "#2E3032",
            backgroundImage: "none",
            borderRadius: 4,
            p: 2
        }}>
            <Box component="div" sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Stack direction="row" spacing={1}>
                    <Stack spacing={1}>
                        <Typography variant="subtitle2">AD LORD</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                            <Avatar sx={{ height: 36, width: 36 }} />
                            <Typography>@mikeandpicture</Typography>
                        </Stack>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography variant="subtitle2">Sponsor</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                            <Avatar sx={{ height: 36, width: 36 }} />
                            <Typography>@mikeandpicture</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Box
                    mt={2}
                    width={320}
                    height={320}
                    sx={{
                        backgroundImage: `url(https://ipfs.io/ipfs/bafybeig7nf2glzhanp5ecwh42qjv6cp42tj77u4sjdigox623hlap3n3xe/0)`,
                        backgroundColor: "#414144",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        borderRadius: 8
                    }}
                >
                </Box>
                <Typography variant="h4" p={2}>Name of composition</Typography>
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