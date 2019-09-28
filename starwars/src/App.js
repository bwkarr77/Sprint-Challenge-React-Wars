import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//import components
//import /name/ from "./components/{Name}.jsx"\
import CharacterList from "./components/CharacterList.jsx";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [siteContent, setContent] = useState([]);

  // useEffect(() => {
  // axios
  //   // .get(`https://swapi.co/api/people/${1}`)
  //   .get(`https://swapi.co/api/people/`)
  //   .then(results => {
  //     console.log(Object.keys(results.data));
  //     console.log(results.data[`results`]);
  //     console.log(results.data);
  //   })
  //   .catch(err => console.log(err));
  // }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList />
    </div>
  );
};

export default App;
