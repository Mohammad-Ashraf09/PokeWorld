import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';

const Pokemon = () => {

    const { particularPokemon, getParticularPokemon } = useContext(PokemonContext);

    const params = useParams();
    useEffect(()=>{
        getParticularPokemon(params.id);
    },[]);

    console.log(particularPokemon);

  return (
    <div>
        {particularPokemon.name}
    </div>
  )
}

export default Pokemon