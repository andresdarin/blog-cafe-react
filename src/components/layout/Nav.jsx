import React from 'react'
import { NavLink } from 'react-router-dom';


export const Nav = () => {

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/landing-page" onClick={() => handleSetActive(0)}>
                        <span className="text">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" onClick={() => handleSetActive(0)}>
                        <span className="text">About Us</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/courses" onClick={() => handleSetActive(0)}>
                        <span className="text">Academy</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => handleSetActive(0)}>
                        <span className="text">Get in touch!</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
