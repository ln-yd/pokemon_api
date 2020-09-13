import React, { useState, useEffect } from "react";
// import { Link, Redirect, Router } from "@reach/router";
import "./App.css";
import AxiosPokemon from "./components/AxiosPokemon";
// import Fetch from "./components/Fetch";
import Axios from "axios";

function App() {
  return (
    // fetch data from API
    <div>
      {/* <Fetch></Fetch> */}
      <AxiosPokemon></AxiosPokemon>
    </div>
  );
}

export default App;
