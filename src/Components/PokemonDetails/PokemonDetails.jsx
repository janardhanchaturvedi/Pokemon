import React, { useEffect, useState } from "react";
import "./PokemonDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setpokemon] = useState({});
  async function PokemonDownload() {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    console.log(response);
    setpokemon({
      image: response.data.sprites.other.dream_world.front_default,
      name: response.data.name,
      Heigth: response.data.height,
      Weight: response.data.weight,
      types: response.data.types.map((t) => t.type.name)
    });
  }
  console.log(pokemon);
  useEffect(() => {
    PokemonDownload();
  }, []);
  return (
    <div className="body">
    <div className="Pokemon-Card">
      <div className="Pokemon-Card-image">
        <img src={pokemon.image} />
      </div>
      <div className="Pokemon-Card-name"><span>{pokemon.name}</span></div>
      <div className="Pokemon-Card-Height">Height :{pokemon.Heigth}</div>
      <div className="Pokemon-Card-weight">Weight :{pokemon.Weight}</div>
      <div className="Pokemon-Card-types">Types :
        {pokemon.types && pokemon.types.map((t) => 
          <div key={t}>{t}</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default PokemonDetails;
