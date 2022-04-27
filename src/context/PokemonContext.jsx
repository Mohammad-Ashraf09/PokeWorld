import {createContext, useState} from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({children, setProgress}) =>{
    const [pokemon, setPokemon] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    // const [particularPokemon, setParticularPokemon] = useState({})

    // getting all pokemons
    const getPokemons = async () =>{
        setProgress(10);
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);
        setProgress(30)
        const data = await response.json();
        //console.log(data.results);
        setProgress(70)
        setPokemon(data.results);
        setTotalResults(data.count);
        setLoading(false);
        setProgress(100)
    };

    // for going to particular pokemon's page
    // const getParticularPokemon = async (id) =>{
    //     setProgress(10);
    //     setLoading(true);
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    //     setProgress(30)
    //     const data = await response.json();
    //     //console.log(data.results);
    //     setProgress(70)
    //     setParticularPokemon(data);
    //     setLoading(false);
    //     setProgress(100)
    // };

    return(
        <PokemonContext.Provider
            value={{ pokemon, loading, totalResults, getPokemons }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonContext;