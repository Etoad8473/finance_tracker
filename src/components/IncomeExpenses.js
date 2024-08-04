import React, { useCallback, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transactions => transactions.amount);

  const income = amounts.filter(num => num > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = (amounts.filter(num => num < 0)
  .reduce((total, curr) => (total += curr), 0) *-1)
  .toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">{expense}</p>
        </div>
    </div>
  )
}
