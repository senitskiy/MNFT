import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

import MintMNFT from "./Pages/MintMNFT";

function App() {
  return (
    <Routes>
      <Route path='/mint' element={<MintMNFT />} />
    </Routes>
  );
}

export default App;
