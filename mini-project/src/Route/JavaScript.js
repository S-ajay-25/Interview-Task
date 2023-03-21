import React from 'react'
import './JavaScript.css'
import JavaScriptData from './JavascriptData';
import JavaScriptDetails from './JavaScriptDetails';

function JavaScript () {
    return (
        <div className='javascriptprogramming'>
           
           {JavaScriptData.map((val,index) => {
            return (
                <JavaScriptDetails
                key = {index}
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

export default JavaScript;