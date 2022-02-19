import { Box, CssBaseline, Grid } from "@mui/material";
import { CardMNFT } from "../Components/card-mnft/CardMNFT";
import { Header } from "../Components/header/Header"

const Marketplace = () => {
  return (
    <Box p={4}>
        <Grid sx={{ height: "100%", justifyContent: "center" }} spacing={4} container>
          <Grid item>
            <CardMNFT />
          </Grid>
          <Grid item>
            <CardMNFT />
          </Grid>
          <Grid item>
            <CardMNFT />
          </Grid>
        </Grid>
    </Box>
  );
}

export default Marketplace;