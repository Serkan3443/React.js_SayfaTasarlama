import React from 'react';

function SecuritySettings() {
    return (
        <div>
            <div className='settings-navbar'>
                <h4 className='settings-title'>Account-settings</h4>
                <h6 className='settings-text'>Change account information and settings</h6>
            </div>
            <div className='sec-set'>
                <div className='security-menu'>
                    <ul className='security-list'>
                        <a href='#' className='a-setting'><h6>General</h6></a>
                        <a href='#' className='a-setting'><h6>Security</h6></a>
                        <a href='#' className='a-setting'><h6>Notifications</h6></a>
                        <a href='#' className='a-setting'><h6>Biling Information</h6></a>
                    </ul>
                    <div className='security-right'>
                        <div className='sec-title-container'>
                            <h6 className='sec-title'>Change your password</h6>
                            <button className='btn1' type='button' id='btn1'>Log Out</button>
                        </div>

                        <div className='sec-form'>
                            <div className='sec-password'>
                                <h6 className='form-title'>Current Password</h6>
                                <input className='form-box' type='password'></input>
                            </div>
                        </div>
                        <div className='sec-form'>
                            <div className='sec-password'>
                                <h6 className='form-title'>New Password</h6>
                                <input className='form-box' type='password'></input>
                            </div>
                        </div>
                        <div className='sec-form'>
                            <div className='sec-password'>
                                <h6 className='form-title'>Repeat Password</h6>
                                <input className='form-box' type='password'></input>
                            </div>
                        </div>
                        <div>
                            <div className='sec-check'>
                                <input type='checkbox' className='checking'/>
                                <h6 className='check-title'>Public Profile</h6>
                            </div>
                        </div>
                        <div>
                            <div className='sec-check'>
                                <input type='checkbox' className='checking' />
                                <h6 className='check-title'>Public Profile</h6>
                            </div>
                        </div>
                        <div>
                            <div className='secSetting'>
                                <h6 className='form-title'>You may also consider to update your <a href='#'>notification settings</a></h6>
                                <button className='btn' type='button' id='btn'>View Pages</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SecuritySettings;