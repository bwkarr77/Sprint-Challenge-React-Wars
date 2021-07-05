import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.jsx";
import { Container, Row } from "reactstrap";

const CharacterList = props => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      //   .get(`https://swapi.co/api/people/${1}`)
      .then(results => {
        const siteKeys = [`count`, `next`, `previous`, `results`];
        console.log(results.data[siteKeys[3]]);
        setCharacter(results.data[siteKeys[3]]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
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
      </Row>
    </Container>

    // <div className="Character">
    //   {character.map(ele => {
    //     return (
    //       <CharacterCard
    //         name={ele.name}
    //         height={ele.height}
    //         hair_color={ele.hair_color}
    //         homeworld={ele.homeworld}
    //       />
    //     );
    //   })}
    // </div>
  );
};

export default CharacterList;
