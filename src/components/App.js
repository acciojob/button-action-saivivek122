import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [display,setDisplay]=useState("hide");

  function handleText(){
    if(display==="hide"){
      setDisplay("show")
     
    }
    else{
      setDisplay("hide")
    

    }

  }

  return (
    <div className="App" id="main">
      // Do not alter the main div
    <p id="para" className={display}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleText}>Button</button>
    </div>
  );
}

export default App
