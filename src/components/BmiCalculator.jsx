import React, { useState } from 'react';
import './BmiCalculator.css';

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight && height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for height and weight.");
    }
  };

  return (
    <div className='container0'>
      <div className='box1'>
        <div className='data1'>
          <h1>BMI Calculator</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className='input-container1'>
            <label htmlFor='height'>Height (cm):</label>
            <input type='text' id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='input-container1'>
            <label htmlFor='weight'>Weight (kg):</label>
            <input type='text' id='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          {bmi !== null && (
            <div className='result'>
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmiStatus}</p>
              {bmiStatus === "Underweight" && (
                <div className='suggestions'>
                  <h2>Suggestions to Gain Weight</h2>
                  <ul>
                    <li>Eat more frequently. Have 5-6 smaller meals throughout the day rather than 2-3 large meals.</li>
                    <li>Choose nutrient-rich foods. Incorporate whole-grain breads, pasta, and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds.</li>
                    <li>Drink high-calorie smoothies or shakes. Try making shakes with milk, fresh or frozen fruit, peanut butter, and protein powder.</li>
                    <li>Exercise regularly. Engage in strength training exercises to build muscle mass.</li>
                    <li>Snack more often. Nuts, cheese, dried fruits, and avocados are good options for healthy snacks.</li>
                  </ul>
                </div>
              )}
              {bmiStatus === "Normal Weight" && (
                <div className='suggestions'>
                  <h2>Suggestions for Maintaining Weight</h2>
                  <ul>
                    <li>Eat a balanced diet with a variety of foods from all food groups.</li>
                    <li>Practice portion control to avoid overeating.</li>
                    <li>Stay hydrated by drinking plenty of water throughout the day.</li>
                    <li>Engage in regular physical activity, including both cardio and strength training exercises.</li>
                    <li>Avoid processed foods and opt for whole, nutrient-dense options.</li>
                  </ul>
                </div>
              )}
              {bmiStatus === "Overweight" && (
                <div className='suggestions'>
                  <h2>Suggestions for Weight Loss</h2>
                  <ul>
                    <li>Focus on eating a high-protein, low-carbohydrate diet.</li>
                    <li>Increase your intake of vegetables and fruits.</li>
                    <li>Avoid sugary drinks and snacks.</li>
                    <li>Engage in regular physical activity, including both cardio and strength training exercises.</li>
                    <li>Practice portion control and mindful eating.</li>
                  </ul>
                </div>
              )}
              {bmiStatus === "Obese" && (
                <div className='suggestions'>
                  <h2>Suggestions for Weight Loss</h2>
                  <ul>
                    <li>Follow a healthy, balanced diet that includes a variety of foods from all food groups.</li>
                    <li>Engage in regular physical activity, starting with low-impact exercises and gradually increasing intensity.</li>
                    <li>Work with a healthcare provider or dietitian to create a personalized weight loss plan.</li>
                    <li>Avoid processed foods and sugary drinks.</li>
                    <li>Practice portion control and mindful eating.</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
