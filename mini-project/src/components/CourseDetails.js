import React from 'react'
import { Link } from 'react-router-dom';
import './CourseDetails.css'


function CourseDetails () {
    return (
        <div className='details'>
           
                
            <Link to = '/basicprogramming' className='basicprogramming'> <h4>UnderStanding Basic Programming</h4> </Link>
           <Link to  = '/programmingpy' className='programmingpy' > <h4>Learning a Programming Language</h4> </Link>
          <Link to = '/datastructure' className='datastructure'> <h4>UnderStanding Algorithms and Data Structure</h4> </Link> 
           <Link to = '/simpleprograms' className='simpleprograms'> <h4>Building Simple Programs</h4> </Link>
          <Link to = '/complexprograms' className = 'complexprograms'>  <h4>Building Complex Programs</h4> </Link>
            
           
        </div>
    )
}

export default CourseDetails;