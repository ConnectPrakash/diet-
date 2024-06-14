import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';
import { useDispatch } from 'react-redux';
import './SignIn.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        // Clear previous error
        setError('');

        // Validation checks
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            // Perform signin
            const user = await authService.signin({
                email,
                password
            });

            console.log(user);

            // Store the user in the redux store
            dispatch({
                type: 'SET_USER',
                payload: user
            });

            // Clear the form
            setEmail('');
            setPassword('');

            // Redirect to dashboard page
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to sign in. Please check your credentials and try again.');
        }
    };

    return (
        <div className="sign-in-container">
            <h3>Login</h3>
            <form onSubmit={handleSignIn}>
                {error && <div className="error-message">{error}</div>}
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
                    <button type='submit'>Login</button>
                </div>
            </form>
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </div>
    );
}

export default SignIn;
