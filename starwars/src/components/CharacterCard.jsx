import React from "react";

const CharacterCard = props => {
  return (
    <div className="char-card">
      <h2>Character name: {props.name}</h2>
      <div>
        <p>Character Descriptions:</p>
        <p>Height: {props.height}</p>
        <p>Homeworld: {props.homeworld}</p>
        <p>Hair Color: {props.hair_color}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
