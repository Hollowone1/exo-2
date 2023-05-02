import React from 'react';
import PokemonList from "./pages/pokemon-list";
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
  
const App: React.FC = () => {


 return (
    
    <Router>
        <div>
            <nav>
                <div className='nav-wrapper teal'>
                    <Link to="/" className='brand-logo center'>Pokédex</Link>
                </div>
            </nav>
        <Switch>
            <Route exact path="/" component={PokemonList}></Route>
            <Route exact path="/pokemons" component={PokemonList}></Route>
            <Route path="/pokemons/:id" component={PokemonsDetail}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
        </div>
    </Router>
    
 )
}
  
export default App;