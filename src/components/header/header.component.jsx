import React from 'react'

import './header.styles.css'


const Header = () => {
    return(
        <header className='header'>
            <nav className='headerMenu'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>             
            </nav>

            <div>
                social media links
            </div>
        </header>
        
    )
}

export default Header;

