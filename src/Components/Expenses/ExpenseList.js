import React from 'react';
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  return (
    <ul className='d-flex flex-column justify-content-center align-items-center me-5'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          type={expense.type}
          purchase={expense.purchase}
          amount={expense.amount}
          date={expense.date}
          delExpenses={() => props.delExpenses(expense.id)}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
