import React, { useContext } from 'react';
import './IncExp.css';

import { GlobalContext } from '../../Context/GlobalState';

export const IncExp = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(
    (transaction) => transaction.amount,
  );

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money income">${income}</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money expense">${expense}</p>
      </div>
    </div>
  );
};
