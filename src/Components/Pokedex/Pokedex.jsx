import React from "react";
import Search from "../Search/Search";
import "./Pokedex.css";
import PokemonList from "../Pokemonlist/PokenmonList";


function Pokedex() {
  return (
    
    <div className="Pokedex-wrapper">
      <h1 id="tittle"> Pokedex : </h1>
      <Search />
      <PokemonList />
    </div>
  );
}

export default Pokedex;
