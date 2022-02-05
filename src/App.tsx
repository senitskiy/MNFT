import { createTheme, Grid, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';
import './App.css';

import MintMNFT from "./Pages/MNFT/MintMNFT";
import Marketplace from "./Pages/Marketplace";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1C1C1E",
      paper: "#2E3032",
    },
    primary: {
      main: "#0085FF"
    },
    text: {
      primary: "#FEFEFE",
      secondary: "#F1F1F1"
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      color: "text.primary"
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          background: "#2E3032"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          background: "#2E3032"
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid component="main" sx={{ height: "100vh", backgroundColor: "background.default" }}>
        <Routes>
          <Route path='/' element={<Marketplace />} />
          <Route path='/mint' element={<MintMNFT />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
