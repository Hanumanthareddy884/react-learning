import logo from "./logo.svg";
import "./App.css";
import Simple from "./simple.js";
import SimpleFnCmp from "./simpleFn.js";
import PersInfo from "./components/PersInfo.js";
import React, { useState } from "react";
import ButtonComponent from "./button_components.js"

function initialState() {
  console.log("expensive process", Date.now());
  return 0;
}

function App() {
  const [i, setState] = useState(()=>initialState());
  // const addValue = () => {
  //   setState(i + 1);
  //   // i++;
  //   console.log(i);
  // };`

let msgg = <h1>Hello JSX <ButtonComponent></ButtonComponent></h1>
  const changeCount = (oper) => {
    if (oper === "+") {
      setState(i + 1);
    } else {
      setState(i - 1);
    }
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Simple></Simple>
      <SimpleFnCmp name={"sff"}></SimpleFnCmp> */}

      {/* 
      <PersInfo name={"Reddy"} age={"28"}></PersInfo>
      <PersInfo name={"RR"} age={"26"}></PersInfo> */}

      {/* State  */}
      <h1>{i}</h1>
      <button onClick={()=>changeCount("+")}>Inc</button>
      <button onClick={()=>changeCount("-")}>Dec</button>
      {msgg}
    </div>
  );
}

export default App;
