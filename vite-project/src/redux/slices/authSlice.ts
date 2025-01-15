import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    username: string;
    password: string;
}

interface AuthState {
    users: User[];
    message: string;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    users: JSON.parse(localStorage.getItem('users') || '[]'),
    message: '',
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') || 'false'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ username: string; password: string }>) {
            const { username, password } = action.payload;
            const user = state.users.find((user) => user.username === username);

            if (user) {
                if (user.password === password) {
                    state.message = 'Login successful!';
                    state.isLoggedIn = true;
                    localStorage.setItem('isLoggedIn', 'true');
                } else {
                    state.message = 'Incorrect password!';
                }
            } else {
                state.message = 'User not found. Please register.';
            }
        },
        register(state, action: PayloadAction<{ username: string; password: string }>) {
            const { username, password } = action.payload;
            const userExists = state.users.find((user) => user.username === username);

            if (!userExists) {
                state.users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(state.users));
                state.message = 'Registration successful! You can now log in.';
            } else {
                state.message = 'User already exists. Please log in.';
            }
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.setItem('isLoggedIn', 'false');
            state.message = '';
        },
        clearMessage(state) {
            state.message = '';
        },
    },
});

export const { login, register, logout, clearMessage } = authSlice.actions;
export default authSlice.reducer;