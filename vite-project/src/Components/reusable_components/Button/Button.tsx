import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string
    onClick?: () => void
    isActive?: boolean
    customClass: string
}


const Button: React.FC<ButtonProps> = ({ text, onClick, isActive, customClass }) => {
    return (
        <button className={`custom-button ${isActive ? 'active-button' : ''} ${customClass ?? ''}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;