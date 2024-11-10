import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    static defaultProps = {
        isActive: false,
        customClass: '',
    };

    render() {
        const { text, onClick, isActive, customClass } = this.props;

        return (
            <button
                className={`custom-button ${isActive ? 'active-button' : ''} ${customClass}`}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}

export default Button;
