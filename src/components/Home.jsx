import React, { useState } from 'react';
import { Link} from 'react-router-dom';

// import './BmiCalculator.css'




function Home() {
  
  const dietPlan = {
    day1: {
      breakfast: 'Scrambled eggs with spinach and tomatoes',
      snack1: 'Greek yogurt with berries',
      lunch: 'Grilled chicken salad with mixed greens and avocado',
      snack2: 'Carrot sticks with hummus',
      dinner: 'Baked salmon with quinoa and steamed broccoli'
    },
    day2: {
      breakfast: 'Oatmeal topped with sliced banana and almond butter',
      snack1: 'Apple slices with peanut butter',
      lunch: 'Turkey and veggie wrap with whole grain tortilla',
      snack2: 'Cottage cheese with pineapple chunks',
      dinner: 'Stir-fried tofu with mixed vegetables and brown rice'
    },
    day3: {
      breakfast: 'Whole grain toast with avocado and poached eggs',
      snack1: 'Handful of almonds',
      lunch: 'Grilled shrimp Caesar salad',
      snack2: 'Celery sticks with almond butter',
      dinner: 'Baked chicken breast with sweet potato and roasted asparagus'
    },
    day4: {
      breakfast: 'Greek yogurt with granola and mixed berries',
      snack1: 'String cheese with whole grain crackers',
      lunch: 'Vegetable stir-fry with tofu and brown rice',
      snack2: 'Protein shake with almond milk and banana',
      dinner: 'Baked cod with quinoa and roasted vegetables'
    },
    day5: {
      breakfast: 'Whole wheat toast with avocado and poached eggs',
      snack1: 'Trail mix with nuts and dried fruits',
      lunch: 'Grilled chicken wrap with lettuce and tomato',
      snack2: 'Cottage cheese with sliced peaches',
      dinner: 'Zucchini noodles with marinara sauce and lean ground turkey'
    },
    day6: {
      breakfast: 'Smoothie with kale, banana, almond milk, and protein powder',
      snack1: 'Rice cakes with almond butter and banana slices',
      lunch: 'Salmon with sweet potato and asparagus',
      snack2: 'Carrot and cucumber sticks with hummus',
      dinner: 'Turkey chili with beans and mixed vegetables'
    },
    day7: {
      breakfast: 'Smoothie with spinach, banana, almond milk, and protein powder',
      snack1: 'Mixed nuts',
      lunch: 'Quinoa salad with grilled vegetables and feta cheese',
      snack2: 'Cottage cheese with sliced strawberries',
      dinner: 'Grilled steak with roasted potatoes and green beans'
    },
  };
  

  function DietPlan({ day }) {
    const meals = dietPlan[day];
  
    if (!meals) {
      return <p>No diet plan available for {day}</p>;
    }
  
    return (
      <div className="box">
        <h2>Day {day} Diet Plan:</h2>
        <ul>
          {Object.keys(meals).map((meal, index) => (
            <li key={index}>
              <strong>{meal}:</strong> {meals[meal]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

  return (
    <>

<header className="header">
          <a href="/" className="logo">diet</a>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/diet">Diet</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/signin">Login</Link>
          </nav>
          <div className="fas fa-bars" id="menu"></div>
        </header>
      <section className="home" id="home">
        <div className="content">
          <h3>Welcome to the place full of healthy food</h3>
          <h2>
            It's not about perfect. It's about effort. And when you bring that
            effort every single day, that's where transformation happens. That's
            how change occurs.
          </h2>
          <img
            id="png"
            src="../src/components/png-transparent-business-management-customer-service-eye-lead-generation-sorpresa-hand-service-girl-thumbnail-removebg-preview.png"
            alt="default png"
          />
          <button id="button">
            <Link to="/calories-calculator"> Calories Calculator</Link>
            <img
              id="img"
              src="../src/components/touch.png"
              alt="touch"
            />
          </button>
        </div>
      </section>
     

    
        
       

    
    </>
  );
}
export default Home;
