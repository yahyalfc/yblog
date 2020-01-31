import React from 'react'

import './post.styles.css'
import BlogPost from '../../components/blogpost/blogpost.component';
import SideBar from '../../components/sidebar/sidebar.component';

const Post = () => {
    return(
        <div>
            <section className='container'>
                <BlogPost />
                <SideBar />
            </section>
        </div>
    )

}

export default Post;
