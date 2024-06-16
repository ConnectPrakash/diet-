import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userServices from '../services/users';
import './Dashboard.css';
import WeightLoss from './WeightLoss';
import Weightgain from './Weightgain';
import { Link } from 'react-router-dom';

function Dashboard() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            dispatch({
                type: 'SET_USER',
                payload: JSON.parse(storedUser)
            });
        } else {
            navigate('/signin');
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        userServices.getUser()
            .then(user => {
                const userObject = {
                    name: user.name,
                    email: user.email,
                };
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
                    <Link to="/mealplanner" >Meal-Planner</Link>
                    <Link to="/diet-planner" >Diet-Planner</Link>
                </div>
            </div>
            <div className="dashboard-container">
        
        <div className="notes">
       
            <div>
       
                <p>
                    The diet plan is a healthy eating diet chart, which is designed
                    to improve your metabolism, improve your immunity, and help you
                    lose weight. It comes with both vegetarian and non-vegetarian
                    options. It is very simple to follow, and basically helps in
                    improving your food intake timings.
                </p>
            </div>
            <div>
                <img
                    src="../src/components/fit-woman-showing-balanced-diet-7358593-6019527.png"
                    alt="Diet Plan"
                />
            </div>
        </div>
        <div className="weightloss">
            <WeightLoss />
        </div>
        <div className="weightgain">
            <Weightgain />
        </div>
    </div>
           
        </div>
    );
}

export default Dashboard;
