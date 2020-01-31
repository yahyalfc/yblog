import React from 'react'

import './card.styles.css'

const Card = (props) => {
    return(
        <div className='card' style={props.style} >
            {props.children}
        </div>
    )
}
export default Card;
 