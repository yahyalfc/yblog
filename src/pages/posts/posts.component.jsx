import React from 'react'

import './posts.styles.css'

import SideBar from '../../components/sidebar/sidebar.component'

const AllPosts = (props) => {

    console.log(props)
    return(
        <div>
            <section className='container'>
                
                <SideBar {...props}/>
            </section>
        </div>
    )

}

export default AllPosts;