import React from 'react';
import aboutimage from '../images/aboutimage.png';
function About() {
    return (
        <div className='about'>
            <div className='about-text'>
                <h1 className='about-title'>The powerful and flexible theme for<br />all kinds of businesses</h1>
                <p className='about-paragraph'>Whether you're creating a subscription service, an on<br />-demand marketplace, an e-commerce store, or a portfolio<br /> showcase, theFront helps you create the best possible<br /> product for your users.</p>
                <div className='about-icon'>
                    <div className='about-item'>
                        <span className='about-icon'>300+</span>
                        <p className='about-paragraph'>300 + component<br /> compositions, which will<br /> help you to build any<br /> page easily.</p>
                    </div>
                    <div className='about-item'>
                        <span className='about-icon'>45+</span>
                        <p className='about-paragraph'>45 + landing and<br /> supported pages to<br /> Build a professional website.</p>
                    </div>
                    <div className='about-item'>
                        <span className='about-icon'>99%</span>
                        <p className='about-paragraph'>99% of our customers<br /> rated 5-star our themes<br /> over 5 years.</p>
                    </div>
                </div>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}
export default About;