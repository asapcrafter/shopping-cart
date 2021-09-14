import React from 'react';
import {useHistory} from 'react-router-dom';
import '../styles/css/promo.css'

const Promo = () => {
    const history = useHistory();

    const handleClick = (link) => {
        history.push(link);
    }

    return (
        <div className="promo-container">
                <div className="promo-item">
                    <img className="promo-img" src={require('../assets/promo1.webp').default } alt=""/>
                    <div className="promo-text">
                        Powerful solutions skillfully developed to moisturize and balance skin while boosting radiance by transforming dull skin.
                    </div>
                    <div className="promo-button" onClick={() => handleClick('/shopping-cart/about')}>
                        More about
                    </div>
                </div>
                <div className="promo-item">
                    <img className="promo-img" src={require('../assets/promo-2.jpg').default } alt=""/>
                    <div className="promo-text">
                        Create a personal skincare routine using advice from our skin care experts. Free consultations are available 24/7 on our site.
                    </div>
                    <div className="promo-button">
                        Learn more
                    </div>
                </div>
                <div className="promo-item">
                    <img className="promo-img" src={require('../assets/promo-3.jpg').default } alt=""/>
                    <div className="promo-text">
                        Only the best ethically sourced ingredients are used within our products. Gentle formulas help for all skin types while actively preventing wrinkles.
                    </div>
                    <div className="promo-button" onClick={() => handleClick('/shopping-cart/shop')}>
                        Shop here
                    </div>
                </div>
            </div>
    );
}

export default Promo;
