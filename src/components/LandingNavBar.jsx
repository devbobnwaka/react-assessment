import React from 'react'
import logo from '../assest/images/logo.avif'

import { Link } from "react-router-dom";



function LandingNavBar() {
    return (
        <nav className='nav_container'>
            <img src={logo} alt="logo" className='logo'/>

            <ul>
                <Link to='' ><li className='nav_button'>SignIn</li></Link>
                <Link to='/register' ><li  className='nav_button'>SignUp</li></Link>
            </ul>
        </nav>    
    )
}

export default LandingNavBar;
