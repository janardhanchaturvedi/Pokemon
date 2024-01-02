import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokedex from "../src/Components/Pokedex/Pokedex";
import PokemonDetails from "../src/Components/PokemonDetails/PokemonDetails";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemons/:id/" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;
