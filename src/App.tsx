import { useState } from "react";
import React from 'react';
import POKEMONS from "./models/mock-pockemon";
import Pokemon from "./models/pokemon";

  
const App: React.FC = () => {
const [pokemons] = useState<Pokemon[]>(POKEMONS);

 return (
    <div>
       <h1>Pokédex</h1>
       <p>il y a {pokemons.length} dans le pokédex</p>
    </div>
  
  
 )
}
  
export default App;