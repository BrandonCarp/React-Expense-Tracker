import React from 'react';
const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleDateString("en-us", {
    month: "long",
  });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  const newDay = parseInt(day) + 1;

  return (
      <div className='d-flex justify-content-center align-items-center flex-column text-primary'>
      <div>{month}</div>
      <div>{newDay}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
