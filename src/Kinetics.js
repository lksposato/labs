import React from 'react';
import './Kinetics.css';

export default function Kinetics() {
  document.getElementsByTagName("title")[0].innerHTML = "Kinetics Lab";
  
  return (    
    <div className="App">
      <header className="App-header">
      <h1> Kinetics Lab </h1>  
          <p></p>
          <p></p>
          Initial Concentration: <input id= "concentration"></input>
          <p></p>
          <button id="btn_restart"> Rerun Current Simulation </button>
          <button id="btn_newsim"> Run New Simulation </button>
          <p></p>
            <table id="data_table">
            </table>
          <p></p>
          <label id="debuglog"> </label>
        </header>
    </div>
  );
}