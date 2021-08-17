import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Api = () => {
  const [dataOfcharacter, setdataOfcharacter] = useState([]);
  const [result, setResult] = useState("");
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((dataOfСharacter) => {
        setdataOfcharacter(dataOfСharacter.results);
      });
  }, []);
  useEffect(() => {
    console.log("result:" + result);
  }, [result]);
  function selectDiv(i) {
    setResult(i.origin.url);
  }
  return (
    <div>
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
              <p>{i.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Api;
