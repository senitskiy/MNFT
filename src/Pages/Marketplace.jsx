import { Box, Grid } from "@mui/material";
import { CardMNFT } from "../Components/card-mnft/CardMNFT";
import { Header } from "../Components/header/Header"

const Marketplace = () => {
  return (
    <Box>
      <Header />
      <Box pt={14}>
        <Grid sx={{ height: "100vh", backgroundColor: "background.default" }} spacing={2} container justifyContent="center">
          <Grid item>
            <CardMNFT />
          </Grid>
          <Grid item>
            <CardMNFT />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Marketplace;