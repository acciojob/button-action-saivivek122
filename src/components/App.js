import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [hide,setHide]=useState(false);
  const [display,setDisplay]=useState();
function handleText(){
    let is;
    if(!hide){
      setDisplay("hide")
      setHide(true)
      console.log("first", hide,is)
    }
    else{
      setDisplay("none")
      setHide(false)
      is="show"
      console.log("second", hide,is)

    }

  return (
    <div className="App" id="main">
      // Do not alter the main div
    <p id="para" className={display}>{}Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleText}>Click</button>
    </div>
  );
}

export default App
