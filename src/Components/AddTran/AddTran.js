import React, { useState, useContext } from 'react';
import uuid from 'react-uuid';
import './AddTrans.css';

import { GlobalContext } from '../../Context/GlobalState';

export const AddTran = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text,
      amount: +amount,
    };

    return addTransaction(newTransaction);
  };

  return (
    <div>
      <h3 className="title">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>

        <div>
          <label htmlFor="text">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
