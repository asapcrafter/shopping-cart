import React from 'react';

const Promo = () => {
    return (
        <div className="promo-container">
                <div className="promo-item">
                    <img className="promo-img" src='' alt=""/>
                    <div className="promo-text">
                        Test
                    </div>
                    <div className="promo-button">
                        Shop here
                    </div>
                </div>
                <div className="promo-item">
                    <img className="promo-img" src={require('../assets/promo-2.jpg').default } alt=""/>
                    <div className="promo-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea?
                    </div>
                    <div className="promo-button">
                        Shop here
                    </div>
                </div>
                <div className="promo-item">
                    <img className="promo-img" src="../assets/promo-3.jpg" alt=""/>
                    <div className="promo-text">
                        Shop here
                    </div>
                    <div className="promo-button">
                        Shop here
                    </div>
                </div>
            </div>
    );
}

export default Promo;
