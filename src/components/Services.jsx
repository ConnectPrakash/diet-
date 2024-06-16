import React from 'react'
import './Services.css'
function Services() {
  return (
    <div>
       <header className="header">
 <a href="/" className="logo">diet</a>
 </header>
        <section className='services' id='services'>

<h1 className='heading'> Our servicess</h1>

<div className="box-container">

        <div className="box">
          <div className="icon">

            <img src='../src/components/young-medical-student_144627-9951.jpg' alt=''/>
          </div>

          <div className="content">

            <h3>Nutritional Counseling: </h3>
            <div className="line"></div>
            <p> Guidance from nutrition experts or dietitians who provide education on healthy eating habits, portion control, food choices, and nutrient intake.</p>
            <ul>
              <li><i className='fas fa-check'></i> Healthy Eating Habits</li>
              <li><i className='fas fa-check'></i>Portion Control</li>
              <li><i className='fas fa-check'></i>Food Choices</li>
              <li><i className='fas fa-check'></i>Meal Planning</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="icon">

            <img src='../src/components/this-is-my-help-environment_329181-9688.jpg' alt=''/>
          </div>

          <div className="content">

            <h3>Personalized Meal Plans</h3>
            <div className="line"></div>
            <p> Tailored diet plans based on individual preferences, dietary restrictions, health goals, and lifestyle factors.</p>
            <ul>
              <li><i className='fas fa-check'></i>Individual Preferences</li>
              <li><i className='fas fa-check'></i>Dietary Restrictions</li>
              <li><i className='fas fa-check'></i>Lifestyle Factors</li>
              <li><i className='fas fa-check'></i>Nutritional Balance</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="icon">

            <img src='../src/components/front-view-female-courier-yellow-shirt-yellow-cap-smiling-holding-bowls-with-food-paper-white_140725-19735.jpg' alt=''/>
          </div>

          <div className="content">

            <h3>Food Tracking and Monitoring</h3>
            <div className="line"></div>
            <p>Tools or apps for tracking food intake, calorie counting, and monitoring nutritional values to ensure compliance with the diet plan.</p>
            <ul>
              <li><i className='fas fa-check'></i> Food Diary Apps</li>
              <li><i className='fas fa-check'></i>Calorie Counting</li>
              <li><i className='fas fa-check'></i>Progress Tracking</li>
            </ul>
          </div>
        </div>


</div>
</section>

    </div>
  )
}

export default Services
