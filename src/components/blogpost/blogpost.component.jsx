import React, {useState, useEffect} from 'react'

import './blogpost.styles.css'
import blogPost from '../../data/blog.json'

import Card from '../card/card.component'

const BlogPost = (props) => {
    console.log(props)

    const [post, setPost] = useState ({})
    const [postId, setPostId] = useState('')

    useEffect ( ()=> {
        const postId = props.match.params.postId
        const post = blogPost.data.find(post => post.id == postId)
        setPost(post)
        setPostId(postId)
    }, [post, props.match.params.postId])
    //only rerender when post gets changed

    return(
        <div className='blogPostContainer'>
            <Card>
                <div className='blogHeader'>
                    <span className='blogCategory'>{post.blogCategory}</span>
                    <h1 className='postTitle'>{post.blogTitle}</h1>
                    <span className='postedBy'>{post.postedOn}, by {post.author}</span>
                </div>
            
                 <div className='postImageContainer'>
                    <img src={`${post.blogImage}`} alt='Post Image'/>
                </div>

                <div className='postContent'>
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                
                </div>
            </Card>
        </div>
    )
}
export default BlogPost;