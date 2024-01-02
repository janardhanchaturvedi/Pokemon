import { useState } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex/Pokedex";
import { Route } from "react-router-dom";
import CustomRoutes from "../routes/CustomRoutes";

function App() {
  return (
    <>
      {/* <Pokedex /> */}
      <CustomRoutes/>
    </>
  );
}

export default App;
