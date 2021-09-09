import React from 'react';
import Promo from './Promo';

const Home = () => {
    return (
        <div className='content' id='home'>
            <div id="home-wrapper">
                <div className="home-background">
                    <div id="home-greeting">
                        <div id="hg-title">Start Your Glow</div>
                        <div id="hg-description">Discover your personal skincare routine. Explore new seasonal skin, body, and hair care.</div>
                        <div id="hg-button">SHOP NOW</div>
                    </div>
                </div>
                < Promo />
            </div>
        </div>
    );
}

export default Home;
