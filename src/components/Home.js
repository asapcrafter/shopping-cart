import React from 'react';
import Promo from './Promo';
import {useHistory} from 'react-router-dom';
import '../styles/css/home.css'

const Home = () => {

    const history = useHistory();

    const handleClick = (link) => {
        history.push(link);
    }

    return (
        <div className='content' id='home'>
            <div id="home-wrapper">
                <div className="home-background">
                    <div id="home-greeting">
                        <div id="hg-title">Start Your Glow</div>
                        <div id="hg-description">Discover your personal skincare routine. Explore new seasonal skin, body, and hair care.</div>
                        <div id="hg-button" onClick={() => handleClick('/shopping-cart/shop')}>SHOP NOW</div>
                    </div>
                </div>
                <div className="home description">
                    heofshoehsfe
                </div>
                < Promo />
            </div>
        </div>
    );
}

export default Home;
