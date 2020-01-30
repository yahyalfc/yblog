import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.styles.css'

const Navbar = () => {

    const [search, setSearch] = useState(false);

    const searchClass = search ? 'searchInput active' : 'searchInput'

    const submitSearch = (event) => {
        event.preventDefault()
        alert('search working')
        console.log(event)
    }
    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/post'>Posts</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li> 
               <li><NavLink to='/contact'>Contact</NavLink></li>
            
            </ul>

            <div className='search'>
                <form onSubmit={submitSearch}>
                    <input type='text' placeholder='Search' className={searchClass} />
                    <img className='searchIcon' onClick={() =>setSearch(!search)} src={require('../../assets/icons/search.png')} alt='search' />    
                </form>
            </div>
        </div>
    )
}

export default Navbar