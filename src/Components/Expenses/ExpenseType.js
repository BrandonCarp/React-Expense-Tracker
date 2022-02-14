import {React} from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCash } from "react-icons/bs";

const ExpenseType = (props) => {
  let expenseType;

  switch (props.type) {
    case "Card":
      expenseType = <AiFillCreditCard />;
      break;
    case "Crypto":
      expenseType = <BsCurrencyBitcoin />;
      break;
    default:
      expenseType = <BsCash />;
  }
  return <div className="me-1 ">{expenseType}</div>;
};

export default ExpenseType;
