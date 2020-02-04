import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import {Button} from 'react-bootstrap'

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

    const [expand, setExpand] = useState(false)
    const { expanded } = expand;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    //lets destucture blogposts sheosar stuff.s
    const nangaparbatStuff = blogPosts.data[0]
    const sheosarStuff = blogPosts.data[1]
    const ramaStuff = blogPosts.data[2]
    const chittakathaStuff = blogPosts.data[3]
    const saralStuff = blogPosts.data[4]

    return (
    <>
        <Card>
            <div className='galleryPost' style={{galleryStyle}}>
                <section style={{width: '70%'}}>
                    <NavLink to={`/post/${nangaparbatStuff.slug}`}>
                    <div>
                        <img src={`${nangaparbatStuff.blogImage}`} alt=''/>
                    </div>
                    </NavLink>
                </section>


                <section className='sideImageWrapper' style={{width: '30%'}}>
                    <NavLink to={`/post/${saralStuff.slug}`}>
                    <div style={{height: `${sideImageHeight+85}px`}}>
                        <img src={`${saralStuff.blogImage}`} alt=''/>
                    </div>
                    </NavLink>

                    <NavLink to={`/post/${chittakathaStuff.slug}`}>
                    <div style={{height: `${sideImageHeight+85}px`}}>
                        <img src={`${chittakathaStuff.blogImage}`} alt=''/>
                    </div>
                    </NavLink>

                    <NavLink to={`/post/${sheosarStuff.slug}`}>
                    <div style={{height: `${sideImageHeight+87}px`}}>
                        <img src={`${sheosarStuff.blogImage}`} alt=''/>
                    </div>
                    </NavLink>
                </section>              
            </div>  
        </Card>
        
            <Card style={{marginBottom: '20px'}}>
                <div className='homeContainer'>
                    <section style={{width: '70%'}}>
                        <div className='contentWrapper' style={{textAlign:'center'}}>
                            <span>{ramaStuff.blogCategory}</span>
                            <h2 className='frikkinHeader'>{ramaStuff.blogTitle}</h2>
                            <span className='postedOn' > {ramaStuff.postedOn} by {ramaStuff.author} </span>
                        </div>

                        <div className='postImageWrapper'>
                            <img src={`${ramaStuff.blogImage}`} alt='' />

                            <div className='buttonStuff'>
                                

                                <div className={`content ${toggledClass}`}>
                                <p className='textBlog'> {ramaStuff.blogText} </p>
                                </div>
                            

                                <button onClick={() => setExpand({ expanded: !expanded })}>
                                {expanded ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                            
                        </div>

                       
                    </section>

                    <section style={{width: '30%', marginBottom: '20px'}}>
                        <SideBar style={{width: '100%', letterSpacing: '0.5px', backgroundColor: '#e9eaea', borderLeft: '20px solid #e9eaea', borderTop: '20px solid #e9eaea', boxSizing: 'border-box'}} />
                    </section>
                </div>  
            </Card>  

</>
        
            
        
    )
}    
export default HomePage;        