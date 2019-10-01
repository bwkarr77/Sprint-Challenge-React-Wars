import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.jsx";
import { Container, Row, Button } from "reactstrap";

const CharacterList = props => {
  let characterIndex = 1;
  const [characterSel, setCharacterSel] = useState([]);

  const nextCharacter = (){
        characterIndex += 1;
  }
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/${characterIndex}/`)
      //   .get(`https://swapi.co/api/people/${1}`)
      .then(results => {
        console.log("axios get....");
        //   const siteKeys = [`count`, `next`, `previous`, `results`];
        console.log(results.data);
        setCharacterSel(results.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <CharacterCard
          name={characterSel.name}
          height={characterSel.height}
          hair_color={characterSel.hair_color}
          homeworld={characterSel.homeworld}
        />
        <Button color="primary" onClick=(selectionCharacter())>Next</Button>
        <Button color="secondary">Prev</Button>
      </Row>
    </Container>
  );
};

export default CharacterList;
