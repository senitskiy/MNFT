import { Avatar, Stack, Typography, styled } from "@mui/material"; 
import { Image } from "../image/Image";

const TypographyNickname = styled(Typography)(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.palette.text.primary,
}));

export const CellHistory = () => {
    return(
        <Stack direction="row" spacing={1} p={1} justifyContent="space-between">
            <Image width={100} height={100} />
            <Stack direction="column" justifyContent="center" spacing={1}>
                <div 
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                }}>
                    <Typography variant="body2">1.3 ETH</Typography>
                    <Typography variant="body2">5 min</Typography>
                </div>
                <Stack 
                    direction="row"
                    spacing={1}
                    alignItems="center"
                >
                    <Avatar />
                    <TypographyNickname variant="body2">@semgoSE</TypographyNickname>
                </Stack>
            </Stack>
        </Stack>
    );
}