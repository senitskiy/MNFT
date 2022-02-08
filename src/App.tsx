import { createTheme, Grid, ThemeProvider, styled } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';
import './App.css';

import MintMNFT from "./Pages/MNFT/MintMNFT";
import Marketplace from "./Pages/Marketplace";
import { Header } from './Components/header/Header';

const theme = createTheme({
  shape: {
    borderRadius: 24,
  },
  spacing: 8,
  palette: {
    mode: "dark",
    background: {
      default: "#1C1C1E",
      paper: "#2E3032",
    },
    common: {
      white: "#FEFEFE",
      black: "#1C1C1E"
    },
    grey: {
      900: "#2E3032",
      700: "#414144",
      500: "#636366",
      50: "#F1F1F1"
    },
    primary: {
      main: "#0085FF"
    },
    secondary: {
      main: "#FEFEFE"
    },
    text: {
      primary: "#FEFEFE",
      secondary: "#636366",
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 600,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
    },
    body1: {
      fontSize: 17,
      fontWeight: 300,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: 17
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  }
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid component="main" sx={{ height: "100%", backgroundColor: "background.default" }}>
        <Header />
        <Offset />
        <Routes>
          <Route path='/' element={<Marketplace />} />
          <Route path='/create' element={<MintMNFT />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
