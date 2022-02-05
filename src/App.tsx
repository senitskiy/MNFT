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
    secondary: {
      main: "#F1F1F1"
    },
    text: {
      primary: "#FEFEFE",
      secondary: "#F1F1F1",
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
      defaultProps: {
        sx: {
          backgroundColor: "background.paper",
          borderRadius: 2,
        }
      }
    },
    MuiInputBase: {
      defaultProps: {
        sx: {
          paddingTop: 8,
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#636366"
        }
      },
      defaultProps: {
        focused: false
      }
    },
    MuiPaper: {
      defaultProps: {
        sx: {
          backgroundColor: "background.paper",
          backgroundImage: "none",
          borderRadius: 5
        }

      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          textTransform: "none"
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
