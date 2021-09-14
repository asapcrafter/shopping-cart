import React from 'react';
import '../styles/css/about.css'

const About = () => {
    return (
        <div className='content' id='about'>
            <div className="about-wrapper">
                <div className="about-background">
                    <div className="about-title">OUR MISSION</div>
                    <div className="about-text-container">
                        <div className='about-text'>
                            One of the biggest problems in the beauty industry is that many brands focus on making products that will sell rather than items that are good for our skin. This leads to exaggerated promises, multi-step procedures, and harsh products that cause long-term skin damage.
                        </div>
                    </div>
                </div>
                <div className="about-text-container">
                    <div className="about-text">
                        Despite the abundance of product options and information available, we are more confused about skincare than ever before as consumers. Consumers have been taught to apply more product than our skin requires, disrupting the skin's natural functions and potentially leading to chronic inflammation.
                    </div>
                    <div className="about-text">
                        We believe in the power of simplicity and encourage everyone to take a step back, reset, and pay attention to their skin's actual requirements.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
