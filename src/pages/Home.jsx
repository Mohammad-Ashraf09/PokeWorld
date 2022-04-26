import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import SearchBox from '../components/SearchBox'
import Topbar from '../components/Topbar';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../components/Spinner';
import PokemonContext from '../context/PokemonContext';

const Home = ({setProgress}) => {

    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(20);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false)
    // const {pokemon, loading, totalResults} = useContext(PokemonContext);

    useEffect(()=>{
        const fetchData = async() =>{
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
        }
        fetchData();
    },[]);

    const fetchMoreData = async () => {
        setOffset(offset+20);
        
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
        const data = await response.json();
        
        setPokemon(pokemon.concat(data.results));
    };


  return (
    <>
        <div className="home-container">
            <Topbar/>
            <SearchBox/>

            {loading && <Spinner/>}
            
            <InfiniteScroll dataLength={pokemon.length} next={fetchMoreData} hasMore={pokemon.length !== totalResults} loader={<Spinner/>} >
                <div className="container">
                    <div className="row">
                        {pokemon.map((data)=>(
                            <div className='col-md-4' key={data}>
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