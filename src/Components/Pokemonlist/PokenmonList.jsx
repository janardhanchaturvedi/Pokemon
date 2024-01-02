import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PokenmonList.css";
import Pokemons from "../Pokemons/Pokemons";

function PokemonList() {
  const [pokemonList, setpokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokedexUrl, setPokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  // const url = 'https://pokeapi.co/api/v2/pokemon';
  async function pokemondownload() {
    setIsLoading(true);
    const response = await axios.get(pokedexUrl);
    const pokemonResults = response.data.results;
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    const pokemonResultsPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemondata = await axios.all(pokemonResultsPromise);
    const res = pokemondata.map((pokedata) => {
      const pokemon = pokedata.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.other.dream_world.front_shiny,
        types: pokemon.types,
      };
    });
    console.log(res);
    setpokemonList(res);
    console.log(pokemondata);
    console.log(pokemonResultsPromise);
    console.log(pokemonResults);
    setIsLoading(false);
  }
  useEffect(() => {
    pokemondownload();
  }, [pokedexUrl]);
  return (
    <div className="Pokemon-List-Wrapper">
      <h4 className="List-titlle">Pokemon List</h4>
      <div id="Isloading">
        {isLoading? "isLoading.....": pokemonList.map((p) => (
              <Pokemons name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={prevUrl == null}
          onClick={() => setPokedexUrl(prevUrl)}
        >
          Prev
        </button>
        <button
          disabled={nextUrl == null}
          onClick={() => setPokedexUrl(nextUrl)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
