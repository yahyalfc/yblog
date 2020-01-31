import React from 'react'

import './sidebar.styles.css'
import Card from '../card/card.component'

const SideBar = () => {
    const myStyle = {
        marginBottom: '20px'    
    }

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
                    <div className='recentPost'>
                        <h3>Post Title</h3>
                        <span>January 30, 2020</span>
                    </div>
                </div>
            </Card>
        </div>
        
        

    )
}
export default SideBar;

