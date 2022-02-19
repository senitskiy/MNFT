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
        <Stack direction="row" spacing={1} p={1}>
            <Image width={78} height={78} />
            <Stack direction="column" spacing={1}>
                <div 
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                }}>
                    <Typography>1.3 ETH</Typography>
                    <Typography>5 min</Typography>
                </div>
                <Stack 
                    direction="row"
                    spacing={1}
                    alignItems="center"
                >
                    <Avatar />
                    <TypographyNickname>@semgoSE</TypographyNickname>
                </Stack>
            </Stack>
        </Stack>
    );
}