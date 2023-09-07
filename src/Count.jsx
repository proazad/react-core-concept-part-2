import { useState } from "react";

export default function Count(){
    const [count, setCount] =useState(11);
    function handleAdd(){
        const newCount = count+1;
        setCount(newCount)
    }
    function handleReduce(){
        const newCount = count-1;
        setCount(newCount);
    }
    const counter = {
        border: "1px solid green",
        borderRadius: "5px",
        padding: "10px",
    }
    return(
        <div style={counter}>
        <h3>Count: {count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}