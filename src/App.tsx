import React from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';
import './App.css';

import Marketplace from "./Pages/Marketplace";
import MintMNFT from "./Pages/MintMNFT";


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Marketplace />} />
      <Route path='/mint' element={<MintMNFT />} />
    </Routes>
  );
}

export default App;
