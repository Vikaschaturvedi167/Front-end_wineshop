import React, { useState } from 'react';
import './PagesCss/LoginPage.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const submitSignup = async () => {
        try {
            const response = await fetch('https://vikas-wine-back.cyclic.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            console.log(data); // Handle response data as needed

            if (response.status === 200) {
                setSignupSuccess(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className='main_container_signup'>
                {signupSuccess && (
                    <div className='success-message'>
                        Signup successful! Please <Link to="/login">Login</Link>.
                    </div>
                )}
                <div className='header'>
                    <h2>Signup</h2>
                </div>
                <div className='box'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='UserName'
                    ></input>
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
                    Already Have an Account <Link to="/login">Login Now</Link>
                </p>
                <button onClick={submitSignup} id='sign_up'>Signup</button>
            </div>
        </>
    );
};

export default SignupPage;
