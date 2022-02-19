import { Box, Button, Typography, Stack } from "@mui/material";
import { CellUser } from "../../../Components/cell-user/CellUser";
import { Image } from "../../../Components/image/Image";
import { CardHistory } from './../../../Components/card-history/CardHistory';

export const MNFT = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
                justifyContent: "center"
            }}>
                <Image width="100%" height={400} src="" />
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Box component="div" p={2} style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <div>
                            <Stack direction="row" spacing={1} p={1}>
                                <CellUser
                                    title="Owner"
                                    name="@semgoSE"
                                    image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                                />
                                <CellUser
                                    title="Sponsor"
                                    name="@semgoSE"
                                    image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                                />
                            </Stack>
                            <Box>
                                <Typography p={1} variant="h2" color="text.primary">Name of composition</Typography>
                                <Typography p={1} variant="body1" color="text.primary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                            </Box>
                            <Stack direction="row" p={2} spacing={1}>
                                <Button size="large" variant="contained">Rent AD</Button>
                                <Button size="large" color="secondary">But for 4.4$</Button>
                            </Stack>
                        </div>
                        <div>
                            <CardHistory />
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    );
}