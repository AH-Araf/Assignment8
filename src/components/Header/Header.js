import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='container'>
            <div className='Header'>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h2><i><span className='color'> SUPER</span> CLUB GYM </i></h2>
            </div>
            <p><b>Select your exercise now. </b></p>   
        </div>
    );
};

export default Header;