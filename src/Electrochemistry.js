import React from 'react';
import './Electrochemistry.css';

export default function Electrochemistry() {
  document.getElementsByTagName("title")[0].innerHTML = "Electrochemistry Lab";
  
  return (    
    <div className="App">
      <header className="App-EChem">
      <h1> Electrochemistry Lab </h1>  
        <p></p>
        <label id="debug"></label>
        <p></p>
        <label for="temperature">Temperature:</label>
        <input type="number" id="temperature" min="0" value="0"></input>

        <p></p>

        <div class="left-column">
          <select id="dropdown_a">

          </select>
          <p></p>
          <form>
            <label for="concentration_a">Concentration:</label>
            <input type="number" id="concentration_a" min="0.1" value="0.1" step="0.1"></input>
          </form>
        </div>

        <div class="right-column">
          <select id="dropdown_b">

          </select>
          <p></p>
          <form>
            <label for="concentration_b">Concentration:</label>
            <input type="number" id="concentration_b" min="0.1" value="0.1" step="0.1"></input>
          </form>
        </div>

        <p></p>

        <button id="btn_process">Process</button>


      </header>
    </div>
  );
}