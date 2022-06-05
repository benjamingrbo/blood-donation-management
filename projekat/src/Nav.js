import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import ikona from './ikona.png';


const Nav = () => {
  return (
    <nav>
      <div className="header">
        <img src={ikona} alt="ikona"/>
        <Link to="/"><h3>ZAVOD ZA TRANSFUZIJSKU MEDICINU</h3></Link>
      </div>
      <ul className="nav-links">
        <Link to="noviDonator"><li>Novi donator</li></Link>
      </ul>
    </nav>
  )
}

export default Nav