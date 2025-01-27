import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
    isLoading: boolean;
    error: string | null;
    data: any;
}

const initialState: HomeState = {
    isLoading: false,
    error: null,
    data: null,
};


export const fetchInitialData = createAsyncThunk(
    'home/fetchInitialData',
    async (_, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
    }
);


export const placeOrder = createAsyncThunk(
    'home/placeOrder',
    async (order: { order: string; quantity: number }, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order),
        });
        if (!response.ok) throw new Error('Failed to place order');
        return response.json();
    }
);

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchInitialData.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchInitialData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            })

            .addCase(placeOrder.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(placeOrder.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to place order';
            });
    },
});

export default homeSlice.reducer;