import React, {useState, useEffect} from 'react'

import './blogposts.styles.css'
import blogPost from '../../data/blog.json'

import Card from '../card/card.component'

const BlogPosts = (props) => {
    console.log(props)
    

    console.log(blogPost.data[1].blogTitle)

    blogPost.data.map((post, id) => console.log(id))
    //Displaying the ids
     return(
         <div style={props.style}>
         
            { 
                blogPost.data.map( (post, id)=>{
                    return(
                    <Card style={props.style} key={id}>
                
                    <div className='blogHeader'>
                     <span className='blogCategory'>{post.blogCategory}</span>
                     <h1 className='postTitle'>{post.blogTitle}</h1>
                     <span className='postedBy'>{post.postedOn}, by {blogPost.author}</span>
                 </div>
             
                  <div className='postImageContainer'>
                     <img src={`${post.blogImage}`} alt='Post Image'/>
                 </div>
 
                 <div className='postContent'>
                     <h3>{post.blogTitle}</h3>
                     <p>{post.blogText}</p>
                 
                 </div>
                </Card>
                    )
                    
                })
             }
             
         </div>
     )
 }
 export default BlogPosts;