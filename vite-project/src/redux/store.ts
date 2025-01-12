import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import authReducer from './slices/authSlice';
import menuReducer from './slices/menuSlice';
import orderReducer from './slices/orderSlice'

const store = configureStore({
    reducer: {
        home: homeReducer,
        auth: authReducer,
        menu: menuReducer,
        order: orderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;



