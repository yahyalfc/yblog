import React from 'react'

import './homepage.styles.css'
import Card from '../../components/card/card.component'

const HomePage = (props) => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }

    const sideImageHeight = galleryHeight/3;

    return (
       <div>
            <Card>
             <div className='galleryPost' style={{galleryStyle}}>
                <section style={{width: '70%'}}>
                    <div style={{height: `${galleryHeight}px`}} >
                        <img src={'https://i.ibb.co/d4PpZZR/IMG-0464.jpg'} alt=''/>
                    </div>
                </section>


                <section className={'sideImageWrapper'} style={{width: '30%'}}>
                    <div style={{height: `${sideImageHeight}px`}}>
                        <img src={'https://i.ibb.co/RCszXth/IMG-8655.jpg'} alt=''/>
                    </div>

                    <div style={{height: `${sideImageHeight}px`}}>
                        <img src={'https://i.ibb.co/RCszXth/IMG-8655.jpg'} alt=''/>
                    </div>

                    <div style={{height: `${sideImageHeight}px`}}>
                        <img src={'https://i.ibb.co/RCszXth/IMG-8655.jpg'} alt=''/>
                    </div>
       

                </section>              
              </div>  
            </Card>
        </div>
    )
}

export default HomePage;
