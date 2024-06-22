import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';//Solid ikonlardan birini ekledik

function Options() {
    return (
        <div className='option'>
            <div className='option-icon'>

                <div className='icon-item'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6 className='option-title'>Themeable</h6>
                    <p className='option-paragraph'>Customize any part of our components to<br /> match your design needs.</p>
                </div>

                <div className='icon-item'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6 className='option-title'>Light and dark UI</h6>
                    <p className='option-paragraph'>Optimized for multiple color modes. Use<br/> light or dark, your choice.</p>
                </div>

                <div className='icon-item'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6 className='option-title'>Composable</h6>
                    <p className='option-paragraph'>Designed with composition in mind.<br/> Compose new components with ease.</p>
                </div>
            </div>

            <div className='option-icon2'>

                <div className='icon-item2'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6 className='option-title'>Themeable</h6>
                    <p className='option-paragraph'>Customize any part of our components to<br /> match your design needs.</p>
                </div>

                <div className='icon-item2'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6 className='option-title'>Light and dark UI</h6>
                    <p className='option-paragraph'>Optimized for multiple color modes. Use<br /> light or dark, your choice.</p>
                </div>

                <div className='icon-item2'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6 className='option-title'>Composable</h6>
                    <p className='option-paragraph'>Designed with composition in mind.<br /> Compose new components with ease.</p>
                </div>
            </div>

        </div >
    )
}
export default Options;