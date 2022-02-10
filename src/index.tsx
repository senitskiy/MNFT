import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import AccountState from './context/AccountState';
import "./fonts/style.css";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AccountState>
      <App />
    </AccountState>
  </BrowserRouter>,
  document.getElementById('root')
);
