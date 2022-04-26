import React from 'react'
import {Link} from "react-router-dom";


const Topbar = () => {
  return (
    <div className='topbar-container'>
        <div className="topbar-left">
            <img src="./assets/logo.png" alt="" className="logo-img"/>
            <div className="logo-text">PokeWorld</div>
        </div>
        <div className="topbar-right">
            <ul className="topbar-right-content">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar;