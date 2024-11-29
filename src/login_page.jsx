// Login.js
import React, { useEffect, useState } from 'react';
import './index.css'

let user = []

const Login_Page = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        alert(`username ${username} password ${password}`)
        
        setUsername(''); // this will clear username input
        setPassword(''); // this will gonna clear the pass input
    

    };
    
    return (
        <div className='log_pg'>
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