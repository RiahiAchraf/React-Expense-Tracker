import React, { useContext } from 'react';
import './TransList.css';

import { GlobalContext } from '../../Context/GlobalState';
import { Transaction } from '../Transaction/Transaction';

export const TransList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </div>
  );
};
