import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../services/users';
import './MealPlanner.css';

function MealPlanner() {
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
    // State to manage meal plan
    const [input,setInput] =useState('');
    const [mealPlan, setMealPlan] = useState([]);
    const [desc,setDesc] = useState('');
    // Function to handle adding a meal to the plan
    const addMeal = () => {
        // Placeholder logic to add a meal
        const newMeal = {
            id: Math.random(),
            name: input,
            description: desc,
        };
        setMealPlan([...mealPlan, newMeal]);
    };

    // Function to handle removing a meal from the plan
    const removeMeal = (id) => {
        const updatedPlan = mealPlan.filter(meal => meal.id !== id);
        setMealPlan(updatedPlan);
    };

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
            <div className="meal-planner">
            <h2>Meal Planner</h2>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='name...'/>
            <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='description...'/>
            <div className="meal-plan-actions">
                <button onClick={addMeal}>Add Meal</button>
            </div>
            <div className="meal-list">
                {mealPlan.length === 0 ? (
                    <p>No meals planned yet.</p>
                ) : (
                    <ul>
                        {mealPlan.map(meal => (
                            <li key={meal.id}>
                                <div className="meal-details">
                                    <h3>{meal.name}</h3>
                                    <p>{meal.description}</p>
                                </div>
                                <button onClick={() => removeMeal(meal.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </div>
        
    );
}

export default MealPlanner;
