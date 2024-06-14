import React, { useState } from 'react';
import './CaloriesCalculator.css';

function CaloriesCalculator() {
    const [mealData, setMealData] = useState(null);

    const searchMeal = async (e) => {
        e.preventDefault();
        const input = document.querySelector('.input20');
        const val = input.value.trim();

        if (val) {
            const meals = await fetchMealData(val);
            if (!meals) {
                showAlert();
                return;
            }
            setMealData(meals[0]); // Assuming only one meal is returned
        } else {
            alert("Please try searching for meal:");
        }
    };

    const fetchMealData = async (val) => {
        // themealdb.com api
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
        const { meals } = await res.json();
        return meals;
    };

    const showAlert = () => {
        alert('Meal not found:');
    };

    const showMealInfo = (meal) => {
        const { strMeal, strMealThumb, strInstructions } = meal;
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
            } else {
                break;
            }
        }

        return (
            <div>
                <h1 className="title20">{strMeal}</h1>
                <div className="img20" style={{ backgroundImage: `url(${strMealThumb})` }}></div>
                <p className="info20">{strInstructions}</p>
                <ul className="ingredients20">
                    {ingredients.map((ing, index) => (
                        <li key={index} className="ing">{ing}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <nav className='nav2'>
                <form className="input-container20" onSubmit={searchMeal}>
                    <input type="text" className="input20" placeholder="search food name...." />
                    <button type="submit" className="magnifier20"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <ul>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </nav>

            <main>
                <div className="container20">
                    {mealData ? showMealInfo(mealData) : (
                        <div className="content-container20">
                            <h1 className="title20">Food Name</h1>
                            <p className="info20">
                                Fluffy and golden pancakes served with a drizzle of rich maple syrup. Often accompanied by a pat of butter melting on top, fresh berries, and a sprinkle of powdered sugar.
                            </p>
                            <button className="main-btn20">$20 - Order Now</button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default CaloriesCalculator;
