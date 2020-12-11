import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='navbar bg-dark'>
                <div className=''>
                    <a href="#" className='navbar-brand'>
                        <h3>B</h3>
                    </a>
                </div>
                <div className=''>
                    <ul className='d-flex list-unstyled text-white nav-options'>
                        <li className='nav-options'>Film Reviews</li>
                        <li className='nav-options'>Podcast</li>
                        <li className='nav-options'>Videos</li>
                        <li className='nav-options'>Team</li>
                        <li className='nav-options'>About Us</li>
                    </ul>
                </div>
            </nav >
        </>
    );
};

export default Header;