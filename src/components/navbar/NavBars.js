import { Link } from 'react-router-dom'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import "./NavBars.css"
import SearchBar from '../search/SearchBar';
function NavBars({changeWord, showheading}) {
  return (
    <header>
        <div className='navbar' >
            <div className='logo' >
                <Link to="/">Image Gallery</Link>
            </div>
            <div className='action-btn' >
                <SearchBar changeWord={changeWord} showheading={showheading} />
            </div>
            <ul className='links' >
                <li><Link to="/">Explore</Link></li>
                <li><Link to="/">Collection</Link></li>
                <li><Link to="/">Community</Link></li>
                <div className='toggle-box'>
                    <div>Dark Mode</div>
                    <div><ToggleOnIcon /></div> 
                </div>
            </ul>
            <div className='toggle-btn' >
                <MenuIcon />
            </div>
        </div>
    </header>
  )
}

export default NavBars