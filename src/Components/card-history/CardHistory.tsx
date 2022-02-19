import { Paper, Box, Button } from "@mui/material";
import { CellHistory } from './CellHistory';
import TabsHistory from './TabsHistory';

export const CardHistory = () => {
    return(
        <Paper
            sx={{
                borderRadius: 6
            }}
        >
            <Box p={2} sx={{ 
                display: "flex", 
                paddingTop: 10,
                justifyContent: "center", 
                flexDirection: "column", 
                maxHeight: 420, 
                overflow: "scroll",
                '::-webkit-scrollbar': {
                    display: "none"
                }
            }}>
                <TabsHistory />
                <CellHistory />
                <CellHistory />
                <CellHistory />
                <Box p={1} sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "sticky",
                    bottom: -20,
                    backgroundColor: "background.paper",
                    borderRadius: "0 0 24px 24px",
                }}>
                    <Button variant="text">View more</Button>
                </Box>
            </Box>
        </Paper>
    );
}