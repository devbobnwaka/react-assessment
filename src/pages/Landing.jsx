import '../styles/landing.css';
import '../styles/navbar.css';

import React from 'react';
import LandingNavBar from '../components/LandingNavBar';
import LandingBody from '../components/LandingBody';



function Landing() {
    return (
        <div className='landing_page_container'>
           <LandingNavBar/>
            <LandingBody/>
        </div>
    )
}

export default Landing
