import React from 'react'
import './Python.css'
import PythonData from './PythonData';
import PythonDetails from './PythonDetails';



function Python () {
    return (
        <div className='pythonlanguage'>
           
                {PythonData.map((val,inde) => {
                    return (
                        <PythonDetails 
               
                        key = {inde}
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

export default Python;