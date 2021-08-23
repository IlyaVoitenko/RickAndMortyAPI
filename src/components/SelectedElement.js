import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
const SelectedElement = () => {
  const [dataPerson, setDataPerson] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setDataPerson(data);
      });
  }, [id]);
  useEffect(() => {}, [dataPerson]);

  return (
    <div>
      <div key={dataPerson.id} className="selectedDiv">
        <img src={dataPerson.image} alt={dataPerson.name}></img>
        <p>{dataPerson.name}</p>
        <p>{dataPerson.gender}</p>
        <p>{dataPerson.origin && dataPerson.origin.name} </p>
        <p>{dataPerson.status}</p>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default SelectedElement;
