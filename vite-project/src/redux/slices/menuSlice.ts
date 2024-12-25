import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
    selectedCategory: string;
}

const initialState: MenuState = {
    selectedCategory: '',
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setCategory } = menuSlice.actions;
export default menuSlice.reducer;