import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PokemonCard = ({data}) => {

    const [avatar, setAvatar] = useState("");
    const [type, setType] = useState("");
    // const [id, setId] = useState(0);

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch(data.url);
            const items = await response.json();
            //console.log(dp.sprites.front_default);
            setAvatar(items.sprites.front_default);
            setType(items.types[0].type.name);
        }
        fetchData();
    },[]);


    let name = data.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let pokemonType = type.charAt(0).toUpperCase() + type.slice(1);
    // setId(id+1);

  return (
    <Link to={`/pokemon/${name}`} style={{textDecoration : "none"}}>
        <div className='pokemon-card'>
            <img src={avatar} alt="" />
            <div className="pokemon-card-wrapper">
                <div className="name">{name}</div>
                <div className="detail-type">
                    <div className="detail">More Detail</div>
                    <div className="type">Type : <span>{pokemonType}</span></div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default PokemonCard