import React, { FunctionComponent, useEffect } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemon.hook';
import setPokemons from './pokemon-edit';
import PokemonService from '../services/pokemon-services';
  
const PokemonList: FunctionComponent = () => {
  const pokemons = usePokemons();

  useEffect(()=>{
   PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);
  

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;