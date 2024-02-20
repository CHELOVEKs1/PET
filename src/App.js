import React from 'react';
import './App.css';
import { Header } from './compou/header.js'
import { Balance } from './compou/balance.js'
import { Income } from './compou/income.js';
import { Transactions } from './compou/transactions.js'; 
import { AddTransaction } from './compou/addTransactions.js';

import { GlobalProvider } from './context/globalState.js';

function App() {
  return (
    <GlobalProvider className="GlP">
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <Transactions/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
