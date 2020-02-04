import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import './sidebar.styles.css'
import blogPost from '../../data/blog.json'

import Card from '../card/card.component'

const SideBar = (props) => {
    const myStyle = {
        marginBottom: '20px', 
       paddingLeft: '3px',
       paddingRight: '3px',
       paddingBottom: '3px'
    }
    
    const [posts, setPosts] = useState ([])


    useEffect ( ()=> {
        const posts = blogPost.data
        setPosts(posts)
    }, [posts])


    return(
        <div className='sideBarContainer' style={props.style} >
            <Card style={myStyle} >
                <div className='cardHeader'>
                    <span>About</span>
                </div>    
                
                    <div className='profileimageContainer'>
                       <img src={'https://i.ibb.co/1dSSKDf/futy.jpg'} alt='dp'/>
                    </div>
                      
                    <p className='personalBio'>My name is Yahya Rehman and i’m a software developer specialising in front end development. I love to travel and take pictures. In this blog i’ve shared some of my favourite clicks. Enjoy!
                    </p>
                  
        </Card>

            <Card style={props.customStyle} >
                <div className='cardHeader' >
                    <span>Recent Posts</span>
                </div>

                <div className='recentPosts' >
                 {
                    posts.map(post => {
                        
                        return (
                            <NavLink to = {`/post/${post.slug}`} >
                                <div className='recentPost' >
                                    <h3 className='h3underline'>{post.blogTitle} </h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>
                            

                        )
                    })
                 }
                    
                </div>
            </Card>
        </div>
        
        

    )
}
export default SideBar;

