import React from 'react';
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <div className="footer row text-center bg-dark text-white">
            <div className="col-4 mt-5 mb-5 p-1 border border-white border-top-0 border-bottom-0 border-left-0">
                <h1 class="services-footer">Services</h1>
                <p>Inside the Backlot is your premiere film website. With everything from film reviews, podcasts and short films, here at Backlot we strive to create the ideal film community for film lovers everywhere.</p>

            </div>
            <div className="col-4 p-1 mt-5 mb-5 border border-white border-top-0 border-bottom-0 border-left-0">
                <h1>Test2</h1>
                <h2>Test2</h2>
                <p>Test2</p>
            </div>
            <div className="col-4 mt-5 mb-5">
                <h1>Test2</h1>
                <h2>Test2</h2>
                <p>Test2</p>
            </div>
        </div>
    );
};

export default Footer;