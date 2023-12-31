import { useState } from "react";
import "./App.css";

function App() {
  const [si, setSi] = useState(null);
  async function callBackend() {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    const data = await fetch(
      "http://localhost:3000?p=" + amount + "&r=" + rate + "&t=" + time
    );
    const result = await data.json();
    setSi(result);

    console.log(result);
  }
  return (
    <div>
      <input
        id="amount"
        type="number"
        placeholder="Enter principal amount"
      ></input>
      <input id="rate" type="number" placeholder="Enter interest rate"></input>
      <input id="time" type="number" placeholder="Enter time in years"></input>
      <button onClick={callBackend}>Submit</button>
      {si != null && <div>Your interest amount will be ₹{si}</div>}
    </div>
  );
}

export default App;
