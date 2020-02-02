import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import './sidebar.styles.css'
import blogPost from '../../data/blog.json'

import Card from '../card/card.component'

const SideBar = () => {
    const myStyle = {
        marginBottom: '20px'    
    }

    const [posts, setPosts] = useState ([])


    useEffect ( ()=> {
        const posts = blogPost.data
        setPosts(posts)
    }, posts)


    return(
        <div className='sideBarContainer'>
            <Card style={myStyle}>
                <div className='cardHeader'>
                    <span>About</span>
                </div>    
                
                    <div className='profileimageContainer'>
                       <img src={'https://i.ibb.co/1dSSKDf/futy.jpg'} alt='dp'/>
                    </div>
                      
                <span className='personalBio'>My name is Yahya Rehman. I'm a software developer specializing in <span className='pbio2'>front end development. </span></span>
            </Card>

            <Card>
                <div className='cardHeader'>
                    <span>Recent Posts</span>
                </div>

                <div className='recentPosts'>
                 {
                    posts.map(post => {
                        
                        return (
                            <NavLink to = {`/post/${post.id}`} >
                                <div className='recentPost'>
                                    <h3>{post.blogTitle} </h3>
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

