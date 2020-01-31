import React from 'react'

import './blogpost.styles.css'
import Card from '../card/card.component'

const BlogPost = () => {
    return(
        <div className='blogPostContainer'>
            <Card>
                <div className='blogHeader'>
                    <span className='blogCategory'>Featured</span>
                    <h1 className='postTitle'>Beautiful is always beautiful</h1>
                    <span className='postedBy'>posted on July 21, 2020 by Yahya Rehman</span>
                </div>
            
                 <div className='postImageContainer'>
                    <img src={'https://i.ibb.co/RCszXth/IMG-8655.jpg'} alt='Post Image'/>
                </div>
            </Card>
        </div>
    )
}
export default BlogPost;