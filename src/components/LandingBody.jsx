import React from 'react'
import { Link } from "react-router-dom";
import arrow_right from '../assest/images/arrow-right-solid.svg'

function LandingBody() {

    return (
        <div className='landing_body'>
            <div className='landing_content'>
                <div>
                    <h1>The Persona Assessment</h1>
                    <h5>Find your path to wellness</h5>
                </div>
                <Link to="/register">
                    <button className='btn'>
                        <span>START NOW</span>
                        <img id='arrow_right' className='arrow_right hide' src={arrow_right} alt="" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingBody
