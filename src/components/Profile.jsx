import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userServices from '../services/users';
import './Profile.css';

function Profile() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Get the user from the session storage
        const storedUser = sessionStorage.getItem('user');
        console.log(`user`, storedUser);

        if (storedUser) {
            // Dispatch the user object to the redux store
            dispatch({
                type: 'SET_USER',
                payload: JSON.parse(storedUser)
            });
        } else {
            // If the user is not in the session storage, redirect to the login page
            navigate('/signin');
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        // Get the token from the session storage and call the backend to get the user using the token
        userServices.getUser()
            .then(user => {
                console.log(user);

                // Create a user object to store in the redux store
                const userObject = {
                    name: user.name,
                    email: user.email,
                };

                // Dispatch the user object to the redux store
                dispatch({
                    type: 'SET_USER',
                    payload: userObject
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, [dispatch]);

    return (
        <div className="profile-container">
            {user.user && (
                <>
                    <img src='' alt='default'/>
                    <p>{user.user.name}</p>
                    <p>{user.user.email}</p>
                </>
            )}
        </div>
    );
}

export default Profile;
