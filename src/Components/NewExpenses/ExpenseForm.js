import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [purchaseType, setPurchaseType] = useState("Card");
  const [purchase, setPurchase] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const onSetPurchaseType = (e) => {
    setPurchaseType(e.target.value);
  };

  const onSetPurchase = (e) => {
    setPurchase(e.target.value);
  };

  const onSetPurchaseAmount = (e) => {
    setPurchaseAmount(e.target.value);
  };

  const onSetPurchaseDate = (e) => {
    setPurchaseDate(e.target.value);
  };

  let expenseData = {
    type: purchaseType,
    purchase: purchase,
    amount: purchaseAmount,
    date: new Date(purchaseDate),
  };

  const formSubmit = (e) => {
    e.preventDefault();

    props.onAddExpenseHandler(expenseData);
    setPurchaseType("Card");
    setPurchase("");
    setPurchaseAmount("");
    setPurchaseDate("");
    props.isNotEditing();
  };

  const clearForm = (e) => {
    e.preventDefault();
    props.isNotEditing();

    setPurchaseType("Card");
    setPurchase("");
    setPurchaseAmount("");
    setPurchaseDate("");
  };

  return (
    <div className="bg-white text-light form  d-flex flex-column align-items-center justify-content-center ms-1 mt-5">
      <form onSubmit={formSubmit} className="">
        <h1 className="text-primary mb-2">Track Your Expenses</h1>
    
        <div className="pb-2">
          <select value={purchaseType} onChange={onSetPurchaseType} className='bg-primary text-white border-0 rounded p-1'>
            <option>Card</option>
            <option>Cash</option>
            <option>Crypto</option>
          </select>
        </div>

     <div className="d-flex mb-2">
        <div className="me-2">
          <input className="" type="text" value={purchase} onChange={onSetPurchase} placeholder='Description' />
        </div>
   
        <div className="" >
          <input
            type="number"
            value={purchaseAmount}
            onChange={onSetPurchaseAmount} placeholder="Value" className="w-50"
          />
        </div>
    </div>
        <div  className="">
          <input
            type="date"
            value={purchaseDate}
            onChange={onSetPurchaseDate}
          />
        </div>
     <div className="mt-3 d-flex ">
        <button className="btn-sm btn-danger me-2" onClick={clearForm}>Clear</button>
        <button type="submit" className="btn btn-success">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
