import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from './Store';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonReducer = useSelector(
    (state: RootReducerType) => state.PokemonReducer
  );
  const handlePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };
  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button> 포켓몬 찾기 </button>
      {pokemonReducer.success && <div>
         <p>{pokemonName}</p>
         {pokemonReducer.pokemon?.abilities.map((ability) => {
           return <div>
             <p>{ability.ability.name}</p>
             <p>{ability.ability.slot}</p>
             <img src={pokemonReducer.pokemon?.sprites.front_default} alt=''/>  
             </div> 
         })}
        </div>}
    </div>
  );
}

export default App;
