import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../services/users';

import './Profile.css';

function Profile() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
 

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        // Add any other profile fields you want to include
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user.user) {
            setProfile({
                name: user.user.name,
                email: user.user.email,
                // Initialize other fields from user state
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        userServices.updateUser(profile)
            .then(updatedUser => {
                dispatch({
                    type: 'SET_USER',
                    payload: updatedUser,
                });
                setIsEditing(false);
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setProfile({
            name: user.user.name,
            email: user.user.email,
            // Reset other fields from user state
        });
    };

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
        <div>
            <div className='nav-bar-dash'>
    <div>
        {user.user && (
            <div>
                <h3>Hello {user.user.name}</h3>
               
            </div>
        )}
    </div>
    <p>Welcome to Diet World</p>
    <div>
    <Link to='/'>Home</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/activity" >Activity</Link>
        <Link to="/mealplanner" >Dashboard</Link>
        <Link to="/diet-planner" >Diet-Planner</Link>
    </div>


</div>
<div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-field">
            <label>Name:</label>
            {isEditing ? (
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                />
            ) : (
                <span>{profile.name}</span>
            )}
        </div>
        <div className="profile-field">
            <label>Email:</label>
            {isEditing ? (
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                />
            ) : (
                <span>{profile.email}</span>
            )}
        </div>
        {/* Add other profile fields as needed */}
        <div className="profile-actions">
            {isEditing ? (
                <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </>
            ) : (
                <button onClick={handleEditClick}>Edit Profile</button>
            )}
        </div>
    </div>
        </div>
       
    );
}

export default Profile;
