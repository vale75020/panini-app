import React from "react";

const Player = ({playerTab}) => {
  
    // console.log(this.props);
    // const { name, age, nation, flag, photo } = this.props; // destructuring

    const playerList = playerTab.map(player => { // map single player in array
      return (
        <div className="player" key={player.id}> 
          <div>
            <img className="photo" src={player.photo} alt="player's pic" />
          </div>
          <div>Name: {player.name}</div>
          <div>Age: {player.age}</div>
          <div>Nation: {player.nation}</div>
          <div>
            <img className="flag" src={player.flag} alt="player's flag" />
          </div>
        </div>
      );
    });
    return(
      <div className="player-list">
        {playerList}
      </div>
    )
  }


export default Player;
