import React from 'react'
import './Java.css'
import JavaData from './JavaData';
import JavaDetails from './JavaDetails';



function Java () {
    return (
        <div className='javaprogramming'>
            
            {JavaData.map((val,index) => {
                return(
                    <JavaDetails 
                    key = {index}
                    title = {val.title}
                    text = {val.text}
                    view = {val.title}
                    source = {val.source} />
                )
            })}
        
           
        </div>
    )
}

export default Java;