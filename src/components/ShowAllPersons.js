import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Api = () => {
  const [dataOfcharacter, setdataOfcharacter] = useState([]);
  const [resultSelected, setResultSelected] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((character) => character.json())
      .then((character) => {
        setdataOfcharacter(character.results);
      });
  }, []);
  useEffect(() => {}, [resultSelected]);
  function selectDiv(i) {
    setResultSelected(i.origin.url);
  }
  function findPerson(namePerson) {
    let resultFound = namePerson.target.value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${resultFound}`)
      .then((foundPerson) => foundPerson.json())
      .then((foundPerson) => {
        setdataOfcharacter(foundPerson.results);
      });
  }
  return (
    <div>
      <input
        id="inputSearch"
        type="text"
        onChange={findPerson}
        placeholder="Search of person"
      ></input>
      <div className="container">
        {dataOfcharacter.map((character) => {
          return (
            <div
              onClick={() => {
                selectDiv(character);
              }}
              key={character.id}
            >
              <Link to={`/selected-element/${character.id}`}>
                <img src={character.image} alt={character.name}></img>
                <p>{character.origin.name}</p>
                <p>{character.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Api;
