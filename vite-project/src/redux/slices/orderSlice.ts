import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface OrderState {
    items: OrderItem[];
}

const initialState: OrderState = {
    items: [],
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
    },
});

export const { addItemToOrder, updateQuantity, removeFromCart } = orderSlice.actions;
export default orderSlice.reducer;