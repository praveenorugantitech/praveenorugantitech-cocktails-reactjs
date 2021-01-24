import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/praveenorugantitech-cocktails-reactjs'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/praveenorugantitech-cocktails-reactjs'>home</Link>
          </li>
          <li>
            <Link to='/praveenorugantitech-cocktails-reactjs/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
