import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

const CharacterCard = props => {
  return (
    <Col xs="6" lg="4" height="100%" background="blue" color="yellow">
      <Card height="5000px">
        <CardImg src="" width="100%" top />
        <CardBody height="100%">
          <CardTitle fontSize="50px">Character name: {props.name}</CardTitle>
          <hr />
          <CardText>Character Descriptions:</CardText>
          <CardText>Height: {props.height}</CardText>
          <CardText>Homeworld: {props.homeworld}</CardText>
          <CardText>Hair Color: {props.hair_color}</CardText>
          {/* <CardText height="100%">Other details...</CardText> */}
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterCard;
