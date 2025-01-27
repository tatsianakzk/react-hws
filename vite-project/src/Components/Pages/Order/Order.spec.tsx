import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import orderReducer, { updateQuantity, removeFromCart, updateAddress, setError } from '../../../redux/slices/orderSlice';
import OrderPage from './Order';

const renderWithProviders = (ui, { preloadedState = {}, store = configureStore({ reducer: { order: orderReducer }, preloadedState }) } = {}) => {
    return {
        ...render(
            <Provider store={store}>
                <Router>
                    {ui}
                </Router>
            </Provider>
        ),
        store,
    };
};

describe('OrderPage Component', () => {
    test('renders empty cart message if cartItems is empty', () => {
        renderWithProviders(<OrderPage />, {
            preloadedState: {
                order: { items: [], address: { street: '', house: '' }, error: null },
            },
        });

        expect(screen.getByText(/Your cart is empty!/i)).toBeInTheDocument();
        expect(screen.getByText(/Go back to our fantastic/i)).toBeInTheDocument();
    });

    test('renders cart items and address form when cart is not empty', () => {
        const preloadedState = {
            order: {
                items: [
                    { id: '1', name: 'Pizza', price: 10, quantity: 2, image: '/pizza.jpg' },
                ],
                address: { street: '', house: '' },
                error: null,
            },
        };

        renderWithProviders(<OrderPage />, { preloadedState });

        expect(screen.getByText(/Finish your order/i)).toBeInTheDocument();
        expect(screen.getByText('Pizza')).toBeInTheDocument();
        expect(screen.getByText('$10.00 USD')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Street')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('House')).toBeInTheDocument();
    });

    test('updates quantity when input value changes', () => {
        const preloadedState = {
            order: {
                items: [
                    { id: '1', name: 'Pizza', price: 10, quantity: 2, image: '/pizza.jpg' },
                ],
                address: { street: '', house: '' },
                error: null,
            },
        };

        const { store } = renderWithProviders(<OrderPage />, { preloadedState });

        const quantityInput = screen.getByDisplayValue('2');
        fireEvent.change(quantityInput, { target: { value: '3' } });

        expect(store.getState().order.items[0].quantity).toBe(3);
    });

    test('removes item from cart when remove button is clicked', () => {
        const preloadedState = {
            order: {
                items: [
                    { id: '1', name: 'Pizza', price: 10, quantity: 2, image: '/pizza.jpg' },
                ],
                address: { street: '', house: '' },
                error: null,
            },
        };

        const { store } = renderWithProviders(<OrderPage />, { preloadedState });

        const removeButton = screen.getByText('X');
        fireEvent.click(removeButton);

        expect(store.getState().order.items).toHaveLength(0);
    });

    test('shows error message if address is incomplete', () => {
        const preloadedState = {
            order: {
                items: [
                    { id: '1', name: 'Pizza', price: 10, quantity: 2, image: '/pizza.jpg' },
                ],
                address: { street: '', house: '' },
                error: null,
            },
        };

        const { store } = renderWithProviders(<OrderPage />, { preloadedState });

        const orderButton = screen.getByText(/Place an Order/i);
        fireEvent.click(orderButton);

        expect(store.getState().order.error).toBe('Please provide both street and house information.');
        expect(screen.getByText('Please provide both street and house information.')).toBeInTheDocument();
    });

    test('navigates to success page if address is complete', () => {
        const preloadedState = {
            order: {
                items: [
                    { id: '1', name: 'Pizza', price: 10, quantity: 2, image: '/pizza.jpg' },
                ],
                address: { street: 'Main St', house: '123' },
                error: null,
            },
        };

        const { container } = renderWithProviders(<OrderPage />, { preloadedState });

        const orderButton = screen.getByText(/Place an Order/i);
        fireEvent.click(orderButton);

        expect(container.querySelector('.errorMessage')).not.toBeInTheDocument();
    });

    test('updates address fields when input changes', () => {
        const preloadedState = {
            order: {
                items: [
                    { id: '1', name: 'Pizza', price: 10, quantity: 2, image: '/pizza.jpg' },
                ],
                address: { street: '', house: '' },
                error: null,
            },
        };

        const { store } = renderWithProviders(<OrderPage />, { preloadedState });

        const streetInput = screen.getByPlaceholderText('Street');
        const houseInput = screen.getByPlaceholderText('House');

        fireEvent.change(streetInput, { target: { value: 'Main St' } });
        fireEvent.change(houseInput, { target: { value: '123' } });

        expect(store.getState().order.address.street).toBe('Main St');
        expect(store.getState().order.address.house).toBe('123');
    });
});
