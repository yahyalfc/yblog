import React from 'react'
import {NavLink} from 'react-router-dom'
import './homepage.styles.css'
import Card from '../../components/card/card.component'
import SideBar from '../../components/sidebar/sidebar.component'

import blogPosts from '../../data/blog.json'


const HomePage = (props) => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }

    const sideImageHeight = galleryHeight/3;

    return (
    <>
        <Card>
            <div className='galleryPost' style={{galleryStyle}}>
                <section style={{width: '70%'}}>
                    <NavLink to='/post/1'>
                    <div>
                        <img src={'https://i.ibb.co/d4PpZZR/IMG-0464.jpg'} alt=''/>
                    </div>
                    </NavLink>
                </section>


                <section className='sideImageWrapper' style={{width: '30%'}}>
                    <NavLink to='/post/4'>
                    <div style={{height: `${sideImageHeight+85}px`}}>
                        <img src={'https://i.ibb.co/W0jLqyX/IMG-0340.jpg'} alt=''/>
                    </div>
                    </NavLink>

                    <NavLink to='/post/5'>
                    <div style={{height: `${sideImageHeight+85}px`}}>
                        <img src={'https://i.ibb.co/2vPvNQF/IMG-1624-Pano-Pano.jpg'} alt=''/>
                    </div>
                    </NavLink>

                    <NavLink to={'/post/3'}>
                    <div style={{height: `${sideImageHeight+87}px`}}>
                        <img src={'https://i.ibb.co/QPdZ7Rk/IMG-5655.jpg'} alt=''/>
                    </div>
                    </NavLink>
                </section>              
            </div>  
        </Card>
        
            <Card style={{marginBottom: '20px'}}>
                <div className='homeContainer'>
                    <section style={{width: '70%'}}>
                        <div className='contentWrapper' style={{textAlign:'center'}}>
                            <span>Featured</span>
                            <h2>Sherosa</h2>
                            <span className='postedOn' > posted ib 20 jun vy yahya rehman </span>
                        </div>

                        <div className='postImageWrapper'>
                            <img src={'https://i.ibb.co/RCszXth/IMG-8655.jpg'} alt='' />

                            <div className='buttonStuff'>
                                <p> Some shit about nangta</p>
                                <button>Read More</button>
                            </div>
                            
                            </div>

                        
                            
                       
                        
                    </section>

                    <section style={{width: '30%', marginBottom: '20px'}}>
                        <SideBar style={{width: '100%', letterSpacing: '0.5px', backgroundColor: '#e9eaea', borderLeft: '20px solid #e9eaea', borderTop: '20px solid #e9eaea', boxSizing: 'border-box'}} />
                    </section>
                </div>  
            </Card>  
            
{/*
                    
            
*/}

        
            
        </>
    )
}    
export default HomePage;        