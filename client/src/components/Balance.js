import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const values = transactions.map(transactions => (transactions.amount));
  const sum = values.reduce((a,b)=>a+b).toFixed(2);

  return (
    <>
        <h4>Your balance</h4>
        <h1>${sum}</h1>
    </>
  )
}