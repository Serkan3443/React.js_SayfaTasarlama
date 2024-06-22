import React from 'react';
import resim from '../images/resim.png';
function Features() {
    return (
        <div className='feature'>
            <h1 className='feature-title'>Build tools and full documentation</h1>
            <p className='feature-paragraph'>Components, plugins, and build tools are all thoroughly<br /> documented with live examples and markup for easier use<br /> and customization.</p>
            <img src={resim} alt='' className='feature-image' />
        </div>
    )
}
export default Features;