import {React} from 'react';
const ExpenseDate = (props) => {

  const date = new Date(props.date);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset() );

  const month = new Date(date).toLocaleDateString("en-us", {
    month: "long",
  });
  const day = new Date(date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(date).getFullYear();
  

  return (
      <div className='d-flex justify-content-center align-items-center flex-column text-primary'>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
