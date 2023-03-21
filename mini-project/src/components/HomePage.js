import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage () {
    return (
        <div>
            <Link to = '/coursedetails'>
         <h3>Introduction to Computer Science </h3></Link>
        </div>
    )
}

export default HomePage;