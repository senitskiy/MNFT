import { useQuery, gql, QueryOptions } from "@apollo/client";
import { Box, CircularProgress, Grid } from "@mui/material";
import { CardMNFT } from "../Components/card-mnft/CardMNFT";
import { Header } from "../Components/header/Header"
import { GetAllMnftQuery, GetAllMnftQueryVariables, Query } from "../../graphql/generated";

const GET_ALL_MNFT = gql`
query getAllMNFT {
  getAllMNFT {
    address
    name
    image
    description
  }
}
`;

const Marketplace = () => {
  const { data, loading, error } = useQuery<GetAllMnftQuery, GetAllMnftQueryVariables>(GET_ALL_MNFT);

  if(loading) {
    return <CircularProgress />
  }

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
        <Grid item>
          <CardMNFT />
        </Grid>
        <Grid item>
          <CardMNFT />
        </Grid>
        <Grid item>
          <CardMNFT />
        </Grid>
        <Grid item>
          <CardMNFT />
        </Grid>
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