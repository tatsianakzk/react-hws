import React, { useState } from "react";
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLoginOrRegister = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find((user) => user.username === username);

        if (userExists) {
            if (userExists.password === password) {
                setMessage("Login successful!");
                localStorage.setItem("isLoggedIn", "true");
                setTimeout(() => {
                    window.location.href = "/homePage";
                }, 1000);
            } else {
                setMessage("Incorrect password!");
            }
        } else {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            setMessage("Registration successful! You can now log in.");
        }
    };

    return (
        <div className="loginContainer">
            <div className="loginBox">
                <h2>Register or Log in </h2>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleLoginOrRegister}>
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
                        <button
                            type="button"
                            className="cancelButton"
                            onClick={() => {
                                setUsername("");
                                setPassword("");
                                setMessage("");
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;