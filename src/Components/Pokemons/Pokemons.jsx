import React from "react";
import "./Pokemons.css";

function Pokemons({ name, image }) {
  return (
    <>
      <div className="main">
        <h3>{name}</h3>
        <img src={image} />
      </div>
    </>
  );
}

export default Pokemons;
