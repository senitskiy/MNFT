import { Paper, Box } from "@mui/material";
import { CellHistory } from './CellHistory';

export const CardHistory = () => {
    return(
        <Paper
            sx={{
                borderRadius: 6
            }}
        >
            <Box p={2}>
                <CellHistory />
                <CellHistory />
                <CellHistory />
            </Box>
        </Paper>
    );
}