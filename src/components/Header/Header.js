import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/reviwe">Reviwe</a>
                <a href="/manage">Manage Inventry</a>
            </nav>

        </div>
    );
};

export default Header;