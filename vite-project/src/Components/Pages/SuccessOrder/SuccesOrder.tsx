import React from 'react';
import './SuccessOrder.css';

const SuccessOrder: React.FC = () => {
    return (
        <div className="successOrderContainer">
            <h1 className="successOrderTitle">Thank you for the order!</h1>
            <p className="successOrderMessage">
                Please wait for a courier within <strong>60 minutes</strong>.
            </p>
        </div>
    );
};

export default SuccessOrder;