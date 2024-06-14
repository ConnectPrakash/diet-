import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import './SignUp.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        // Clear previous error
        setError('');

        // Validation checks
        if (!name || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        const user = {
            name,
            email,
            password
        };

        console.log(user);

        // Call the signup service
        authService.signup(user);
        alert('User registered successfully and email sent to registered email');
        navigate('/signin');
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="sign-up-container">
            <h3>Register</h3>
            <form onSubmit={handleSignUp}>
                {error && <div className="error-message">{error}</div>}
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name...'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <p>Already Registered? <Link to='/signin'>Sign In</Link></p>
        </div>
    );
}

export default SignUp;
