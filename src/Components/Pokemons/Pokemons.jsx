import React from "react";
import "./Pokemons.css";
import { Link } from "react-router-dom";

function Pokemons({ name, image, id }) {
  return (
    <Link to={`/pokemons/${id}`}>
      <>
        <div className="main">
          <h3>{name}</h3>
          <img src={image} />
        </div>
      </>
    </Link>
  );
}

export default Pokemons;
