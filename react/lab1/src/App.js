import logo from "./logo.svg";
import "./App.css";
import { Chessboard } from "react-chessboard";

const obj = [
  {
    stock_name: "EFX",
    company_name: "Equifax Inc",
    price: 163.55,
    currency: "USD",
    change: "+9.03",
  },
  {
    stock_name: "IRM",
    company_name: "Iron Mountain Inc",
    price: 33.21,
    currency: "USD",
    change: "+1.42",
  },
  {
    stock_name: "NTAP",
    company_name: "NetApp Inc",
    price: 54.81,
    currency: "USD",
    change: "-6.01",
  },
  {
    stock_name: "CTL",
    company_name: "Centurylink Inc",
    price: 13.79,
    currency: "USD",
    change: "-1.37",
  },
];

function record(currency) {
  var color = "green";
  if (currency.change < 0) color = "red";
  return (
    <tr>
      <th>{currency.stock_name}</th>
      <th>{currency.company_name}</th>
      <th>{currency.price}</th>
      <th>{currency.currency}</th>
      <th style={{ color: color }}>{currency.change}</th>
    </tr>
  );
}

function chess(){
  return(
    <div>
      <span style={{background:"black", height:"50px", width:"50px"}}>df</span>
    </div>
  )
}

function App() {
  return (
    <>
      <h1>{new Date().toLocaleDateString()}</h1>
      <table>
        <tr>
          <th>Наименование</th>
          <th>Компания</th>
          <th>Цена</th>
          <th>Валюта</th>
          <th>Изменение</th>
        </tr>
        {obj.map((v) => record(v))}
      </table>
      {chess()}
    </>
  );
}

export default App;
