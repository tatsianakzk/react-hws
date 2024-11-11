import React from 'react';
import './Button.css';

const Button = ({ text, onClick, isActive = false, customClass = '' }) => {
    return (
        <button
            className={`custom-button ${isActive ? 'active-button' : ''} ${customClass}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;