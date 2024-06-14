import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import activityService from '../services/activity'; // Adjust the path as needed
import './Activity.css';
import BmiCalculator from './BmiCalculator';
import DietPlan from './DietPlan'; // Ensure you have a DietPlan component

function Activity() {
  const [selectedDay, setSelectedDay] = useState('');
  const [inputDay, setInputDay] = useState('');
  const [activities, setActivities] = useState([]);
  const user = useSelector(state => state.user);

  const handleDayClick = () => {
    setSelectedDay(`day${inputDay}`);
  };

  const handleInputChange = (event) => {
    setInputDay(event.target.value);
  };

  useEffect(() => {
    if (user && user.token) {
      activityService.getActivities(user.token)
        .then(data => {
          setActivities(data);
        })
        .catch(error => {
          console.error('Error fetching activities:', error);
        });
    }
  }, [user]);

  return (
    <div className="activity-container">
      <h3>Your Activities</h3>
      {activities.length === 0 ? (
        <p>No activities logged yet.</p>
      ) : (
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
              <span>{new Date(activity.date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="divide10">
        <div className="container10">
          <h2>Day-To-Life</h2>
          <div>
            <h1>Fat Loss Diet Plan</h1>
            <input
              type="number"
              value={inputDay}
              onChange={handleInputChange}
              placeholder="Enter day number (1, 2, 3, ...)"
            />
            <button onClick={handleDayClick}>Show Diet Plan</button>
          </div>
          <div>{selectedDay && <DietPlan day={selectedDay} />}</div>
        </div>

        <div className="container10">
          <BmiCalculator />
        </div>
      </div>
    </div>
  );
}

export default Activity;
