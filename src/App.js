import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    if (expense.date > 0 && expense.amount > 0 && expense.purchase.length > 0) {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    }
  };

  const removeExpenseHandler = (expenseId) => {
    const newExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(newExpenses);
  };

  // Local Storage
  useEffect(() => {
    const data = localStorage.getItem("expenses");
    if (data) {
      setExpenses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  });

  return (
    <div className="d-flex  align-items-center bg-dark text-dark flex-column overFlow">
      <NewExpenses onAddExpenseHandler={addExpenseHandler} />
      <Expenses delExpenses={removeExpenseHandler} items={expenses} />
    </div>
  );
}

export default App;
