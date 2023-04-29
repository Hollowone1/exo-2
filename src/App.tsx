import { useState, useEffect } from "react";
import React from 'react';
import POKEMONS from "./models/mock-pockemon";
import Pokemon from "./models/pokemon";

  
const App: React.FC = () => {
const [pokemons, setPokemons] = useState<Pokemon[]>([]);

useEffect(() => {
    setPokemons(POKEMONS);
}, []);

 return (
    <div>
       <h1 className="center">Pokédex</h1>
       <div className="container">
        <div className="row">
            {pokemons.map(({id,name,picture, created})=> {
                <div className="col s6 m4" key={id}>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={picture} alt={name}></img>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{name}</p>
                                <p><small>{created.toString()}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
       </div>
    </div>
 )
}
  
export default App;