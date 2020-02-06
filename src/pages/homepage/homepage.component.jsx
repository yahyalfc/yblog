import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import {Button} from 'react-bootstrap'

import './homepage.styles.css'
import Card from '../../components/card/card.component'
import SideBar from '../../components/sidebar/sidebar.component'

import blogPosts from '../../data/blog.json'


const HomePage = (props) => {
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
        <Card style={{maxHeight: '705px', boxSizing: 'border-box'}}>     
                
                    <div className='images'>
                    <div className='leftImage'>
                        <NavLink to={`/post/${nangaparbatStuff.slug}`}>
                            <img className='image' src={`${nangaparbatStuff.blogImage}`} alt=''/>
                        </NavLink>
                    </div>
                
                    {/* right side images */}
                    
                    <div className='rightImage'>
                        <NavLink to={`/post/${saralStuff.slug}`}>
                            <img className='image' src={`${saralStuff.blogImage}`} alt=''/>
                        </NavLink>

                        <NavLink to={`/post/${chittakathaStuff.slug}`}>
                            <img className='image' src={`${chittakathaStuff.blogImage}`} alt=''/>
                        </NavLink>

                        <NavLink to={`/post/${sheosarStuff.slug}`}>
                            <img className='image' src={`${sheosarStuff.blogImage}`} alt=''/>
                        </NavLink>
                    </div>
                    </div>
                    
                



{/*
<section className='sideImageWrapper' style={{width: '30%', float: 'right'}}>
                    <NavLink to={`/post/${saralStuff.slug}`}>
                    <div className='sideImageHeight'>
                        <img src={`${saralStuff.blogImage}`} alt=''/>
                    </div>
                    </NavLink>

                    
                    <div className='sideImageHeight'>
                        
                    </div>
                    </NavLink>

                    
                    <div className='sideImageHeight'>
                        
                    </div>
                    </NavLink>
                </section>        
*/}
                      
           
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