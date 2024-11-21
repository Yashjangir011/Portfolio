// Login.js
import React, { useState } from 'react';

const Login_Page = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic validation (you can replace this with actual authentication logic)
        if (username && password) {
            alert(`Username: ${username}\nPassword: ${password}`);
            // Here you would typically handle the login logic (e.g., API call)
        } else {
            alert('Please enter both username and password');
        }
    };
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login_Page;