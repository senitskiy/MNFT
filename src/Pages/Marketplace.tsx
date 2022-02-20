import { useQuery, gql, QueryOptions } from "@apollo/client";
import { Box, CircularProgress, Grid, List } from "@mui/material";
import { CardMNFT } from "../Components/card-mnft/CardMNFT";
import { Header } from "../Components/header/Header"
import { GetAllMnftQuery, GetAllMnftQueryVariables, Query } from "../../graphql/generated";
import { useState } from 'react';

const GET_ALL_MNFT = gql`
query getAllMNFT {
  getAllMNFT {
    address
    name
    image
    description
    cost
    costAd
    owner {
      address
      name
    }
    sponsor {
      address
      name
    }
  }
}
`;

const Marketplace = () => {
  const { data, loading, error } = useQuery<GetAllMnftQuery, GetAllMnftQueryVariables>(GET_ALL_MNFT);

  if (loading) {
    return <CircularProgress />
  }

  return (
    <Box p={4}>
      <Grid sx={{ height: "100%", justifyContent: "center" }} spacing={4} container>
        {
          data.getAllMNFT?.map((mnft) => (
            <Grid item>
              <CardMNFT {...mnft} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default Marketplace;