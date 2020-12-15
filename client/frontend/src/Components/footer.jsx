import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer row text-center bg-dark text-white ml-2 mr-2">
            <div className="col-12 col-md-4 mt-5 mb-5 border border-white border-top-0 border-bottom-0 border-left-0">
                <h4 class="services-footer">Services</h4>
                <p className=''>Inside the Backlot is your premiere film website. With everything from film reviews, podcasts and short films, here at Backlot we strive to create the ideal film community for film lovers everywhere.</p>
                <div>
                    <a href="https://www.instagram.com/insidethebacklot/?hl=en"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-footer"></img></a>
                    <a href="https://twitter.com/insidebacklot?lang=en"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-footer"></img></a>
                    <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-footer"></img></a>
                </div>
            </div>
            <div className="col-12 col-md-4 p-1 mt-5 mb-5 border border-white border-top-0 border-bottom-0 border-left-0 d-flex">
                <div className='col-12'>
                    <h4>Genres</h4>
                    <ul className='list-unstyled'>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Horror/Thriller</li>
                        <li>Mystery</li>
                        <li>Romance</li>
                        <li>Sci-Fi</li>
                    </ul>
                
                    <h4>Where to Listen</h4>
                    <ul className='list-unstyled'>
                        <li><a href="//podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563">Apple Podcasts</a></li>
                        <li><a href="https://open.spotify.com/show/4qRzBpNjTMGSKWTixYZQtY?si=3x-7yXOFScqqA5iWYszEEA">Spotify</a></li>
                        <li><a href="https://insidethebacklot.podbean.com/">Podbean</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-4 mt-5 mb-5">
                <h1>Test2</h1>
                <h2>Test2</h2>
                <p>Test2</p>
            </div>
        </div>
    );
};

export default Footer;
