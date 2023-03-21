import React from 'react'
import BasicConceptsDetails from './BasicConceptDetails';
import BasicConcepts from './BasicConcepts';
import './CourseDetails.css'


function BasicProgramming () {
    return (
        <div className='Basic Programming'>
           
                
            
        {BasicConcepts.map((val,ind) => {
            return (
                <BasicConceptsDetails
               
                key = {ind}
                title = {val.title}
                text = {val.text}
                view = {val.view}
                source = {val.source}
                />

            )

        })}
           
        </div>
    )
}

export default BasicProgramming;