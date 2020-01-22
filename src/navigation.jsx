import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <nav>
        <h3>Daakye Hene </h3>
        <ul>
            <Link to='./nav'>
            <li>navigation</li> </Link>
            <Link to='./main-content'>
            <li>content</li></Link>
        </ul>
        </nav>
    )
}

export default Nav;