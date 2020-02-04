import React from 'react'
import {Link} from 'react-router-dom'

import './logo.styles.css'

const Logo = () => {
    return(
        <div className='logo'>
            
            <Link to='/'>Fernweh</Link>
        </div>
    )
}

export default Logo