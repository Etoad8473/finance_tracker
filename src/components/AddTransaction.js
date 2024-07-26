import React from 'react'

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form action="">
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" placeholder='Enter text...' />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount<br/>(negative - expense, postiive - income)</label>
        </div>
      </form>
    </>
  )
}