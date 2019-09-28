import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.jsx";

const CharacterList = props => {
  const [siteContent, setContent] = useState([]);
  const [character, setCharacter] = useState([]);
  console.log(`CharacterList ran...`);
  useEffect(() => {
    //   console.log(`useEffect() Ran...`);
    axios
      .get(`https://swapi.co/api/people/`)
      //   .get(`https://swapi.co/api/people/${1}`)
      .then(results => {
        //   const contentKeys = Object.keys(results.data).map(each => {
        //     console.log(results.data(each));
        //   });
        const siteKeys = [`count`, `next`, `previous`, `results`];
        // console.log(`Keys, data: ${Object.keys(results.data)}`);
        console.log(results.data[siteKeys[3]]);

        setCharacter(results.data[siteKeys[3]]);
        //   console.log(`SetChar ran...`);
        console.log(character);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="Character">
      {character.map(ele => {
        return (
          <CharacterCard
            name={ele.name}
            height={ele.height}
            hair_color={ele.hair_color}
            homeworld={ele.homeworld}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
