import { describe, it, expect } from 'vitest';
import orderReducer, {
    addItemToOrder,
    updateQuantity,
    removeFromCart,
    updateAddress,
    setError
} from './orderSlice';

const initialState = {
    items: [],
    address: {
        street: '',
        house: '',
    },
    error: null,
};


describe('orderSlice', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle addItemToOrder for a new item', () => {
        const newItem = {
            id: '1',
            name: 'Product 1',
            price: 100,
            quantity: 2,
            image: 'image1.png',
        };

        const updatedState = orderReducer(initialState, addItemToOrder(newItem));

        expect(updatedState.items).toEqual([newItem]);
    });

    it('should handle addItemToOrder for an existing item', () => {
        const existingState = {
            ...initialState,
            items: [
                {
                    id: '1',
                    name: 'Product 1',
                    price: 100,
                    quantity: 1,
                    image: 'image1.png',
                },
            ],
        };

        const updatedState = orderReducer(existingState, addItemToOrder({
            id: '1',
            name: 'Product 1',
            price: 100,
            quantity: 2,
            image: 'image1.png',
        }));

        expect(updatedState.items[0].quantity).toBe(3);
    });

    it('should handle updateQuantity', () => {
        const existingState = {
            ...initialState,
            items: [
                {
                    id: '1',
                    name: 'Product 1',
                    price: 100,
                    quantity: 1,
                    image: 'image1.png',
                },
            ],
        };

        const updatedState = orderReducer(existingState, updateQuantity({
            id: '1',
            quantity: 5,
        }));

        expect(updatedState.items[0].quantity).toBe(5);
    });

    it('should handle removeFromCart', () => {
        const existingState = {
            ...initialState,
            items: [
                {
                    id: '1',
                    name: 'Product 1',
                    price: 100,
                    quantity: 1,
                    image: 'image1.png',
                },
            ],
        };

        const updatedState = orderReducer(existingState, removeFromCart('1'));

        expect(updatedState.items).toEqual([]);
    });

    it('should handle updateAddress', () => {
        const newAddress = {
            street: '123 Main St',
            house: '4B',
        };

        const updatedState = orderReducer(initialState, updateAddress(newAddress));

        expect(updatedState.address).toEqual(newAddress);
    });

    it('should handle setError', () => {
        const errorMessage = 'An error occurred';

        const updatedState = orderReducer(initialState, setError(errorMessage));

        expect(updatedState.error).toBe(errorMessage);

        const clearedState = orderReducer(updatedState, setError(null));

        expect(clearedState.error).toBeNull();
    });
});