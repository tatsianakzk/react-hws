import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface Address {
    street: string;
    house: string;
}

interface OrderState {
    items: OrderItem[];
    address: Address;
    error: string | null;
}

const initialState: OrderState = {
    items: [],
    address: {
        street: '',
        house: '',
    },
    error: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemToOrder: (state, action: PayloadAction<OrderItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateAddress: (state, action: PayloadAction<Address>) => {
            state.address = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const {
    addItemToOrder,
    updateQuantity,
    removeFromCart,
    updateAddress,
    setError
} = orderSlice.actions;
export default orderSlice.reducer;
