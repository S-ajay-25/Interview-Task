import React from 'react'
import { Link } from 'react-router-dom';
import './CourseDetails.css'
// import './ProgrammingLanguage.css'



function Programmingpy () {
    return (
        <div>
           
                
            
       <Link to = '/python' className='python'><h2>Python</h2></Link> 
       <Link to = '/java' className='java'><h2>Java</h2></Link> 
       <Link to = '/javascript'className='javascript'><h2>JavaScript</h2></Link> 
           
        </div>
    )
}

export default Programmingpy;