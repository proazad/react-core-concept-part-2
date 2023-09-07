import { useState } from "react";
import "./App.css";
import Count from "./Count";
import Friends from "./Friends";
import Player from "./Player";
import Tasbih from "./Tasbih";
import Users from "./Users";

function App() {
  const [count, setCount] = useState(0);
function clickme(){
  alert("This is  Alert testing perpose");
}
  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Tasbih></Tasbih>
      <Count></Count>
      <Player></Player>
    </>
  );
}

export default App;
