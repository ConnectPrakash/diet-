import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../services/users';
import './Dashboard.css';
import WeightLoss from './WeightLoss';
import Weightgain from './Weightgain';

function Dashboard() {
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

    console.log(user.user);

    return (
        <div className="dashboard-container">
            {user.user && 
                <div>
                    <h3>Hello {user.user.name}</h3>
                    <p>Welcome to Diet World</p>
                    <Link to='/activity'>Activity</Link>
                    <Link to='/profile'>Profile</Link>
                </div>
            }
            <div className="notes">
                <div>
                    <p>
                        The diet plan is a healthy eating diet chart, which is designed to
                        improve your metabolism, improve your immunity, and help you lose
                        weight. It comes with both vegetarian and non-vegetarian options. It
                        is very simple to follow, and basically helps in improving your food
                        intake timings.
                    </p>
                </div>
                <div>
                    <img src="../src/components/fit-woman-showing-balanced-diet-7358593-6019527.png" alt="Diet Plan" />
                </div>
            </div>
            <div className='weightloss'>
    <WeightLoss/>
    </div>
    <div className='weightgain'>
      <Weightgain/>
    </div>
        </div>
    );
}

export default Dashboard;
