import { useState } from "react";

export default function Player(){
    const [player, setPlayer] = useState(5);
    const playerStyle = {
        border:"1px solid purple",
        marginTop: "15px",
        borderRadius: "5px"
    }
    const addPlayer = () =>{
        const newPlayer = player +1;
        setPlayer(newPlayer);
    }
    const removePlayer = () =>{
        const newPlayer = player - 1;
        setPlayer(newPlayer);
    }
    return (
        <div style={playerStyle}>
            <h3>Player: {player}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}