import React from 'react'
import './Header.scss';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div>Header</div>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link><br/></li>
            <li><Link to='/about'>About</Link></li>
        </ul>      
      </nav>
    </>
  )
}

export default Header