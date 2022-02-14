import { React, useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseHandler(expenseData);
  };

  const onSetEditing = () => {
    setEditing(true);
  };

  const onNotEditing = () => {
    setEditing(false);
  };

  return (
    <div className="">
      {!editing && <button className="btn btn-success mb-5 mt-5" onClick={onSetEditing}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          isNotEditing={onNotEditing}
          onAddExpenseHandler={saveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpenses;
