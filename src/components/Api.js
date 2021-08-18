import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Api = () => {
  const [dataOfcharacter, setdataOfcharacter] = useState([]);
  const [resultSelected, setResultSelected] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((dataOfСharacter) => {
        setdataOfcharacter(dataOfСharacter.results);
      });
  }, []);
  useEffect(() => {
    console.log(resultSelected);
  }, [resultSelected]);
  function selectDiv(i) {
    setResultSelected(i.origin.url);
  }
  function findPerson(namePerson) {
    let resultFound = namePerson.target.value;
    console.log(resultFound);
    fetch(`https://rickandmortyapi.com/api/character/?name=${resultFound}`)
      .then((data) => data.json())
      .then((data) => {
        setdataOfcharacter(data.results);
        console.log(dataOfcharacter);
      });
  }
  return (
    <div>
      <input type="text" onChange={findPerson}></input>
      {dataOfcharacter.map((i) => {
        return (
          <div
            onClick={() => {
              selectDiv(i);
            }}
            key={i.id}
          >
            <Link to={`/selected-element/${i.id}`}>
              <img src={i.image} alt={i.name}></img>
              <p>{i.origin.name}</p>
              <p>{i.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Api;
