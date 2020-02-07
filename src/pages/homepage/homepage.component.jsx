import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import './homepage.styles.css'
import Card from '../../components/card/card.component'
import SideBar from '../../components/sidebar/sidebar.component'

import blogPosts from '../../data/blog.json'


const HomePage = (props) => {
    const [expand, setExpand] = useState(false)
    const { expanded } = expand;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    const [random, setRandom] = useState(0)

    useEffect ( ()=>{
        const vRan = Math.floor(Math.random() * Math.floor(blogPosts.data.length));
        setRandom(vRan)
    }, [])

   console.log(random)
   console.log(blogPosts.data.length)
    //lets destucture blogposts
    const nangaparbatStuff = blogPosts.data[0]
    const sheosarStuff = blogPosts.data[1]
    const chittakathaStuff = blogPosts.data[3]
    const saralStuff = blogPosts.data[4]

    useEffect(()=>{
        

        const cutRightImages = () => {
            let leftImageHeight = document.getElementsByClassName("leftImage")[0].offsetHeight;
            let cut = document.getElementsByClassName("cut");
            for(let i = 0; i < cut.length ; i++){
                cut[i].style.height = leftImageHeight / 3 + "px";
                console.log(leftImageHeight + "px");
            }
        }
        cutRightImages();
        window.addEventListener('resize', cutRightImages);
    });
        
    return (
    <>
        
                <div>
                    <div className='leftImageContainer'>
                        <NavLink to={`/post/${nangaparbatStuff.slug}`}>
                            <img className='leftImage' src={`${nangaparbatStuff.blogImage}`} alt=''/>
                        </NavLink>
                    </div>
                
                    {/* right side images */}
                    
                    <div className='rightImages'>
                        <div className='cut'>
                            <NavLink to={`/post/${saralStuff.slug}`}>
                                <img className='image' src={`${saralStuff.blogImage}`} alt=''/>
                            </NavLink>
                        </div>
                        
                        <div className='cut'>
                            <NavLink to={`/post/${chittakathaStuff.slug}`}>
                                <img className='image' src={`${chittakathaStuff.blogImage}`} alt=''/>
                            </NavLink>
                        </div>    
                            
                        <div className='cut'>
                            <NavLink to={`/post/${sheosarStuff.slug}`}>
                                <img className='image' src={`${sheosarStuff.blogImage}`} alt=''/>
                            </NavLink>
                        </div>             
                    </div>
                </div>
                    
        
       
            <Card style={{marginBottom: '20px'}}>
                <div className='homeContainer'>
                    <section style={{width: '70%'}}>
                        <div className='contentWrapper' style={{textAlign:'center'}}>
                            <span>{blogPosts.data[random].blogCategory}</span>
                            <h2 className='frikkinHeader'>{blogPosts.data[random].blogTitle}</h2>
                            <span className='postedOn' > {blogPosts.data[random].postedOn} by {blogPosts.data[random].author} </span>
                        </div>

                        <div className='postImageWrapper'>
                            <img src={`${blogPosts.data[random].blogImage}`} alt='' />

                            <div className='buttonStuff'>
                                

                                <div className={`content ${toggledClass}`}>
                                <p className='textBlog'> {blogPosts.data[random].blogText} </p>
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