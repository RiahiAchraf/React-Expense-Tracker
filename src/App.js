import React from 'react';
import './App.css';

import { Header } from './Components/Header/Header';
import { Balance } from './Components/Balance/Balance';
import { IncExp } from './Components/IncExp/IncExp';
import { TransList } from './Components/TransList/TransList';
import { AddTran } from './Components/AddTran/AddTran';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <TransList />
        <AddTran />
      </div>
    </GlobalProvider>
  );
}

export default App; // stop at 36
