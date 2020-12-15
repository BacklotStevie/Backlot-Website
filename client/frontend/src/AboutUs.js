import React from 'react';
import Logo from './Components/backlot-logo.png'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="jumbotron bg-dark col-12 mr-1 mt-5 mb-5">
                <div className='container col-3'>
                    <img className="about-jumbo" src={Logo} />
                </div>
                <div className='col-9'>
                    <h1 className="display-5 text-white">About Us</h1>
                    <p className="lead text-white">Inside the Backlot is a community. A place for cinephiles and filmmakers to connect and interact with one another. Our goal here at the Backlot is to expose the public to new films and up-and-coming filmmakers looking to leave their mark on the industry. For many, film is a hobby. For some, film is a passion. One thing is certain: film is art, and like any art, it’s a way to get your voice heard. Here are our voices.
                        <br /><br />Welcome to Inside the Backlot.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;