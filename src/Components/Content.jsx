import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';//Solid ikonlardan birini ekledik
function Content() {
    return (
        <div className='content-text'>
            <h1 className='content-title'>Build accessible React apps with speed</h1>
            <p className='c-write'>Build a beautiful, modern website with flexible,fully customizable,atomic MUI components</p>
            <div className='content-icon'>
                <div className='icon-item'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6>Built for developers</h6>
                    <p className='iconParagraph'>theFront is built to make your life easier. Variables,<br /> build tooling, documentation, and reusable<br /> components.</p>
                </div>

                <div className='icon-item'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6>Designed to be modern</h6>
                    <p className='iconParagraph'>Designed with the latest design trends in mind.<br /> theFront feels modern, minimal, and beautiful.</p>
                </div>

                <div className='icon-item'>
                    <a href='#' className='smileicon'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></a>
                    <h6>Documentation for everything</h6>
                    <p className='iconParagraph'>We've written extensive documentation for<br /> components and tools, so you never have to<br /> reverse engineer anything.</p>
                </div>
              
            </div>
        </div>
    )
}
export default Content;