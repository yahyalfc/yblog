import React from 'react'

import './post.styles.css'
import BlogPost from '../../components/blogpost/blogpost.component';
import SideBar from '../../components/sidebar/sidebar.component';

const Post = (props) => {

    console.log(props)
    return(
        <div>
            <section className='container'>
                <BlogPost style={{width: '100%'}} {...props} />
             
            </section>
        </div>
    )

}

export default Post;
