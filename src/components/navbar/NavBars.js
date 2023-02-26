import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import "./NavBars.css"
import SearchBar from '../Navsearch/SearchBar';
import {Switch} from 'antd';

function NavBars({changeWord, showheading, toggler, darkMode}) {


  return (
    <header>
        <div className='navbar' >
            <div className='logo' >
                <Link to="/">Gallery</Link>
            </div>
            <div className='action-btn' >
                <SearchBar changeWord={changeWord} showheading={showheading} />
            </div>
            <ul className='links' >
                <li><Link to="/">Explore</Link></li>
                <li><Link to="/">Collection</Link></li>
                <li><Link to="/">Community</Link></li>
                <div className='toggle-box'>
                    <div>{darkMode ? 'Light Mode' : 'Dark Mode'}</div>
                    <div> <Switch onClick={toggler} /> </div>
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