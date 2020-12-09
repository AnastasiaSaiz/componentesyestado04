import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [num, setNum] = useState(0);

  function click() {
    setNum(num + 1)
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={click}> click</button>
    </div>
  )

}

export default App;
