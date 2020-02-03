import React from 'react'

import './posts.styles.css'

import SideBar from '../../components/sidebar/sidebar.component'
import BlogPosts from '../../components/blogposts/blogposts.component'


const AllPosts = (props) => {

    
    return(
        
        <div>
            <section className='container'>
            
           
                    <BlogPosts style={{width: '97%', marginBottom: '40px'}} {...props}/>
               
           
                
                <SideBar style={{width: '30%'}} {...props}/>
            </section>
        </div>
    )

}

export default AllPosts;