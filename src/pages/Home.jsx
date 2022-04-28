import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import SearchBox from '../components/SearchBox'
import Topbar from '../components/Topbar';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../components/Spinner';
import PokemonContext from '../context/PokemonContext';

const Home = () => {

    const {pokemon, loading, totalResults, getPokemons} = useContext(PokemonContext);
    const [offset, setOffset] = useState(20);
    const [pokemons, setPokemons] = useState(pokemon)
    
    useEffect(()=>{
        getPokemons();
    },[]);

    const fetchMoreData = async () => {
        setOffset(offset+20);
        
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
        const data = await response.json();
        
        setPokemons(pokemons.concat(data.results));
    };

    //console.log(pokemon);


  return (
    <>
        <div className="home-container">
            <Topbar/>
            <SearchBox/>

            {loading && <Spinner/>}
            
            <InfiniteScroll dataLength={pokemons.length} next={fetchMoreData} hasMore={pokemons.length !== totalResults} loader={<Spinner/>} >
                <div className="container">
                    <div className="row">
                        {pokemon.map((data)=>(
                            <div className='col-md-6 col-sm-6 col-lg-4' key={data.name}>
                                <PokemonCard data={data} />
                            </div>
                        ))}
                        {pokemons.map((data)=>(
                            <div className='col-md-6 col-sm-6 col-lg-4' key={data.name}>
                                <PokemonCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
            
        </div>
    </>
  )
}

export default Home