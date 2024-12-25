import React, { useState } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { login, register, clearMessage } from '../../../redux/slices/authSlice';

function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();
    const { message } = useSelector((state: RootState) => state.auth);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.find((user: { username: string }) => user.username === username);

        if (userExists) {
            dispatch(login({ username, password }));
        } else {
            dispatch(register({ username, password }));
        }
    };

    const handleClear = () => {
        setUsername('');
        setPassword('');
        dispatch(clearMessage());
    };

    return (
        <div className="loginContainer">
            <div className="loginBox">
                <h2>Register or Log in</h2>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="username">User name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="UserName"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="buttonGroup">
                        <button type="submit" className="submitButton">
                            Submit
                        </button>
                        <button type="button" className="cancelButton" onClick={handleClear}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;