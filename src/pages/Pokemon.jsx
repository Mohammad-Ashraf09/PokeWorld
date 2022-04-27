import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Topbar from '../components/Topbar';
import PokemonContext from '../context/PokemonContext';

const Pokemon = () => {

    const [particularPokemon, setParticularPokemon] = useState({});
    const [dp, setDp] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const params = useParams();

    useEffect(()=>{
      const fetchData = async()=>{
        // setProgress(10);
        // setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);
        // setProgress(30)
        const data = await response.json();
        const profile = await data.sprites.other.dream_world.front_default;
        const species = await data.species.name;
        const type = await data.types[0].type.name;
        const name = await data.name;
        //console.log(data.results);
        // setProgress(70)
        setParticularPokemon(data);
        setDp(profile)
        setSpecies(species);
        setType(type);
        setName(name);
        // setLoading(false);
        // setProgress(100)
      }
      fetchData();
    },[]);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    let naam = name.charAt(0).toUpperCase() + name.slice(1);

    let bg;
    if(type==="grass")
      bg = "rgb(22, 242, 121)"
    else if(type==="water")
      bg = "rgb(0, 255, 255)"
    else if(type==="fire")
      bg = "rgb(210, 107, 24)"
    else if(type==="bug")
      bg = "rgb(203, 228, 140)"
    else if(type==="poison")
      bg = "rgb(78, 95, 156)"
    else if(type==="electric")
      bg = "rgb(244, 247, 205)"
    else if(type==="rock")
      bg = "rgb(158, 158, 154)"
    else if(type==="ground")
      bg = "rgb(92, 92, 88)"
    else
      bg = "rgb(210, 183, 207)"
      


  return (
    <div>
      <Topbar/>
      <div className="detail-container">
        <div className="detail-container-wrapper">

          <div className="detail-left" style={{backgroundColor:bg}}>
              <img className="cover-pic" src={PF+"cover10.jpg"} alt="" />
              <img className="profile-pic" src={dp} alt="" />
              <div className="about1">
                <p className='about1-text'> <span>Species</span> : {species}</p>
                <p className='about1-text'><span>Type</span> : {type}</p>
                <p className='about1-text'><span>Height</span> : {particularPokemon.height/10*3.28084.toFixed(2)} feet</p>
                <p className='about1-text'><span>Weight</span> : {particularPokemon.weight/10} kg</p>
              </div>
              <h1 className="about1-name">--- {naam} ---</h1>
          </div>

          <div className="detail-right" style={{backgroundColor:bg}}>
            <p>Moves</p>
            <div className="about2"></div>
            <div className="about2"></div>
            <div className="about2"></div>
            <div className="about2"></div>
            <div className="about2"></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pokemon