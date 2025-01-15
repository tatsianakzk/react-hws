import React, { useState } from 'react';
import './Order.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { updateQuantity, removeFromCart } from '../../../redux/slices/orderSlice';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../reusable_components/Button/Button';

const OrderPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const cartItems = useSelector((state: RootState) => state.order.items);

    const [street, setStreet] = useState<string>('');
    const [house, setHouse] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleOrderClick = (): void => {
        if (!street.trim() || !house.trim()) {
            setError('Please provide both street and house information.');
            return;
        }

        setError(null);
        navigate('/successOrder');
    };

    const handleQuantityChange = (id: string, quantity: number): void => {
        if (quantity < 1) return;
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemoveItem = (id: string): void => {
        dispatch(removeFromCart(id));
    };

    if (cartItems.length === 0) {
        return (
            <div className="orderPageContainer">
                <h1 className="orderTitle">Your cart is empty!</h1>
                <h2 className="menuLink">
                    Go back to our fantastic{' '}
                    <Link to="/menu" className="navLinkOrder">Menu</Link>
                </h2>
            </div>
        );
    }

    return (
        <div className="orderPageContainer">
            <h1 className="orderTitle">Finish your order</h1>
            <div className="orderList">
                {cartItems.map((item) => (
                    <div className="orderItem" key={item.id}>
                        <div className="itemDetails">
                            <img src={item.image} alt={item.name} className="itemImage" />
                            <span className="itemName">{item.name}</span>
                        </div>
                        <div className="itemPrice">${item.price.toFixed(2)} USD</div>
                        <div className="itemActions">
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                                }
                                min={1}
                                className="quantityInput"
                            />
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="removeButton"
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="addressForm">
                <input
                    type="text"
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="addressInput"
                />
                <input
                    type="text"
                    placeholder="House"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                    className="addressInput"
                />
                {error && <div className="errorMessage">{error}</div>}
            </div>

            <Button text="Place an Order" isActive={true} onClick={handleOrderClick} customClass="orderButton" />
        </div>
    );
};

export default OrderPage;