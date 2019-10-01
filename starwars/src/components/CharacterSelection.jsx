import React, { useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.jsx";
import { Container, Row, Button } from "reactstrap";

const CharacterList = () => {
  const [characterSel, setCharacterSel] = useState([]);
  const [charVal, setCharVal] = useState(1);

  function newChar(val) {
    axios
      .get(`https://swapi.co/api/people/${val}/`)
      //   .get(`https://swapi.co/api/people/${1}`)
      .then(results => {
        //   const siteKeys = [`count`, `next`, `previous`, `results`];
        console.log(results.data);
        setCharacterSel(results.data);
      })
      .catch(err => console.log(err));
  }

  async function nextCharacter() {
    const result = await newChar(charVal);
  }

  return (
    <Container>
      <Row>
        <form
          onSubmit={e => {
            e.preventDefault();
            nextCharacter();
          }}
        >
          <Button
            type="submit"
            color="secondary"
            onClick={() => {
              setCharVal(charVal - 1);
              // console.log(charVal);
            }}
          >
            Prev
          </Button>
          <CharacterCard
            name={characterSel.name}
            height={characterSel.height}
            hair_color={characterSel.hair_color}
            homeworld={characterSel.homeworld}
          />
          <Button
            type="submit"
            color="primary"
            onClick={() => {
              setCharVal(charVal + 1);
              // console.log(charVal);
            }}
          >
            Next
          </Button>
        </form>
      </Row>
    </Container>
  );
};

export default CharacterList;
