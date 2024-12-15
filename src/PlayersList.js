import React from "react";
import players from "./players";
import Player from "./Player";
import './App.css';


const PlayersList = () => {
    return (
      <div>
        <h1>Players List</h1>
        <div className="player-cards">
          {players.map((player) => (
            <Player key={player.id} player={player} /> 
          ))}
        </div>
      </div>
    );
  };
  
  export default PlayersList;