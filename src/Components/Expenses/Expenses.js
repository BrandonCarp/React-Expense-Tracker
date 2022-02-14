import React from 'react';
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseList delExpenses={props.delExpenses} items={props.items} />
    </div>
  );
};

export default Expenses;
