import React from 'react'
import './hero.styles.css'

import Card from '../card/card.component'
import Logo from '../logo/logo.component'
import Navbar from '../navbar/navbar.component'

const Hero = () => {
    return(
        <div>
            <Card>
                <div className='inlineX'>
                    <Logo />
                </div>
                
                <Navbar />
            </Card>
        </div>

    )
}

export default Hero;