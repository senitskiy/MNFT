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
          <Route path='/mnft' element={<MNFT />} />
          <Route path='/create' element={<CreateMNFT />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
