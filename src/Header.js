import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = ({title,onGetEmail}) => {
    return (
        <div className="header">
            <div className="header-text">
                {title}
            </div>
            
            <br></br>
            <div>
                <GoogleAuth onGetEmail={onGetEmail}/>
            </div>
        </div>
    )
}

export default Header;