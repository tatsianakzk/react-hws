import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    isActive?: boolean;
    customClass?: string;
}

function Button({ text, onClick, isActive = false, customClass = '' }: ButtonProps) {
    return (
        <button
            className={`customButton ${isActive ? 'activeButton' : ''} ${customClass}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;