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

const size = "66px"

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

function blackCell() {
  return (
    <div style={{ height: size, width: size, background: "black" }}></div>
  )
}
function whiteCell() {
  return (
    <div style={{ height: size, width: size, background: "white" }}></div>
  )
}

function cell(letter) {
  return (
    <div style={{ height: size, width: size, background: "white", fontSize:"25px", display:"flex", alignItems: "center", justifyContent: "center" }}>{letter}</div>
  )
}

function rowA() {
  return (
    <div style={{ display: "flex" }}>
      {cell("")}
      {cell("a")}
      {cell("b")}
      {cell("c")}
      {cell("d")}
      {cell("e")}
      {cell("f")}
      {cell("g")}
      {cell("h")}
    </div>
  )
}

function row(num) {
  var style = {
    display: "flex"
  }
  var first;
  var second;
  if (num % 2 != 0) {
    first = blackCell();
    second = whiteCell();
  }
  else {
    first = whiteCell();
    second = blackCell();
  }

  var board = <div></div>;
  return (
    <div style={style}>
      {cell(num)}
      {first}
      {second}
      {first}
      {second}
      {first}
      {second}
      {first}
      {second}
      {cell(num)}
    </div>
  )
}

function chess() {
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div>
      {rowA()}
      {numbers.map(v => row(v))}
      {rowA()}
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
