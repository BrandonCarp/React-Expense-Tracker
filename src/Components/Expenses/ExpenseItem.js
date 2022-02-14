import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseType from "./ExpenseType";

const ExpenseItem = (props) => {
  return (
    <ul className="d-flex align-items-center justify-content-between text-black mb-3">
      <div className="d-flex align-items-center justify-content-center text-dark bg-white rounded ps-3 pe-3 pt-1 pb-1">
      <ExpenseDate date={props.date} />
      <div className="me-3">
        {props.purchase}
      </div>
      <div className="d-flex me-3 text-success">
      <ExpenseType type={props.type} />
     {props.amount}   
      </div>
      <button className="btn-sm btn-danger" onClick={props.delExpenses}>
        Remove
      </button>
      </div>
    </ul>
  );
};

export default ExpenseItem;
