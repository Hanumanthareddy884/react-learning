import logo from "./logo.svg";
import "./App.css";
import Simple from "./simple.js";
import SimpleFnCmp from "./simpleFn.js";
import PersInfo from "./components/PersInfo.js";
import React,{useState} from 'react'
function App() {
const [i,setState] = useState(0)
const addValue=()=>{
setState(i+1)
// i++;
console.log(i);
}
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
    <button onClick={addValue}>Button</button>
    </div>
  );
}

export default App;
