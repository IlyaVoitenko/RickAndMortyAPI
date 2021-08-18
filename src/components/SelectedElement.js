import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SelectedElement = () => {
  const [dataPerson, setDataPerson] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setDataPerson(data);
        console.log(dataPerson);
      });
  }, [id]);
  useEffect(() => {
    console.log(dataPerson);
  }, [dataPerson]);

  return (
    <div key={dataPerson.id}>
      <img src={dataPerson.image} alt={dataPerson.name}></img>
      <p>{dataPerson.name}</p>
      <p>{dataPerson.gender}</p>
      <p>{dataPerson.origin && dataPerson.origin.name} </p>
      <p>{dataPerson.status}</p>
    </div>
  );
};
export default SelectedElement;
