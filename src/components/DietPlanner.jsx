import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DietPlanner.css';
import { useDispatch, useSelector } from 'react-redux';
import userServices from '../services/users';

const dietPlans = [
    { id: 1, name: 'Keto Diet', description: 'High-fat, low-carb diet to help you lose weight.', link: '/keto' },
    { id: 2, name: 'Mediterranean Diet', description: 'Based on the traditional foods of Mediterranean countries.', link: '/mediterranean' },
    { id: 3, name: 'Vegan Diet', description: 'Completely plant-based diet, excluding all animal products.', link: '/vegan' },
    { id: 4, name: 'Paleo Diet', description: 'Focuses on eating foods similar to what our hunter-gatherer ancestors ate.', link: '/paleo' },
    { id: 5, name: 'Intermittent Fasting', description: 'Cycles between periods of fasting and eating.', link: '/intermittent-fasting' }
];

function DietPlanner() {
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
                
                    <Link to="/profile" >Profile</Link>
                    <Link to="/activity" >Activity</Link>
                    <Link to="/mealplanner" >Meal-Planner</Link>
                    <Link to="/diet-planner" >Diet-Planner</Link>
                </div>
            </div>

            <div className="diet-planner">
            <h2>Diet Plans</h2>
            <ul>
                {dietPlans.map(plan => (
                    <li key={plan.id}>
                        <Link to={plan.link}>{plan.name}</Link>
                        <p>{plan.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
       
    );
}

export default DietPlanner;
