import { Paper, Box } from "@mui/material";
import { CellHistory } from './CellHistory';
import TabsHistory from './TabsHistory';

export const CardHistory = () => {
    return(
        <Paper
            sx={{
                borderRadius: 6
            }}
        >
            <Box p={2}>
                <TabsHistory />
                <CellHistory />
                <CellHistory />
                <CellHistory />
            </Box>
        </Paper>
    );
}