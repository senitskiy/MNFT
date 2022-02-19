import { createTheme, Grid, ThemeProvider, styled } from '@mui/material';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';
import './App.css';

import CreateMNFT from "./Pages/MNFT/create/CreateMNFT";
import { Header } from './Components/header/Header';
import Marketplace from './Pages/Marketplace';
import { MNFT } from './Pages/MNFT/mnft/MNFT';
import { CssBaseline } from '@mui/material';
import { RentMNFT } from './Pages/MNFT/rent/RentMNFT';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0085FF',
      dark: '#0085FF',
      light: '#FEFEFE',
      contrastText: '#FEFEFE',
    },
    secondary: {
      main: '#FEFEFE',
    },
    background: {
      default: '#1C1C1E',
      paper: '#2E3032',
    },
    text: {
      primary: '#FEFEFE',
      secondary: '#636366',
      disabled: '#414144',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: 48,
      lineHeight: 1.4,
    },
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeightLight: 300,
    htmlFontSize: 17,
    h3: {
      fontSize: 20,
      lineHeight: 1.4,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.4,
    },
    button: {
      fontSize: 17,
      fontWeight: 600,
      textTransform: "none"
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    }
  }
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid component="main" sx={{ height: "100vh", backgroundColor: "background.default" }}>
        <Header />
        <Offset />
        <Routes>
          <Route path='/' element={<Marketplace />} />
          <Route path='/mnft/:address' element={<MNFT />} />
          <Route path='/create' element={<CreateMNFT />} />
          <Route path='/rent/:address' element={<RentMNFT />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
