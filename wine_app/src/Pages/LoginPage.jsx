import React, { useState } from 'react';
import './PagesCss/LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const submitLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log(data); // Handle response data as needed

            if (response.status === 200) {
                setLoginSuccess(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className='main_container_signup'>
                {loginSuccess && (
                    <div className='success-message'>
                        Welcome to MINE-WINE {email}
                    </div>
                )}
                <div className='header'>
                    <h2>Login</h2>
                </div>
                <div className='box'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='E-mail'
                    ></input>
                </div>
                <div className='box'>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    ></input>
                </div>
                <p>
                    Don't Have an Account <Link to="/signup">Create Account</Link>
                </p>
                <button onClick={submitLogin} id='sign_up'>Login</button>
            </div>
        </>
    );
};

export default LoginPage;
