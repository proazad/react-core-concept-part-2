import { useState } from "react";

export default function Player() {
  const tasbi = {
    display: "flex",
    gap: "10px",
    border: "1px solid green",
    marginBottom: "20px",
    borderRadius: "5px",
    padding: "15px",
  };
  const tasbiChild = {
    border: "1px solid green",
    borderRadius: "5px",
    padding: "5px",
  };

  const [count, setCount] = useState(0);
  const updateCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const reduceCount = () =>{
    const reduce = count -1;
    setCount(reduce);
  }

  return (
    <div style={tasbi}>
      <div style={tasbiChild}>
        <h3>Subhan-Allah</h3>
        <h1>{count}</h1>
        <button onClick={updateCount}>Add</button>
        <button onClick={reduceCount}>Remove</button>
      </div>
      <div style={tasbiChild}>
        <h3>Alhamdulillah</h3>
        <h1>{count}</h1>
        <button>Add</button>
        <button>Remove</button>
      </div>
      <div style={tasbiChild}>
        <h3>Subhan-Allah</h3>
        <h1>{count}</h1>
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
}
