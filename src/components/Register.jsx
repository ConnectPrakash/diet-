import axios from 'axios';
import React, { useState } from 'react';
import './Register.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    height: '',
    weight: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstname) errors.firstname = "Firstname is required.";
    if (!formData.lastname) errors.lastname = "Lastname is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.password) errors.password = "Password is required.";
    if (!formData.height) errors.height = "Height is required.";
    if (!formData.weight) errors.weight = "Weight is required.";
    return errors;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post('https://died-backend.onrender.com/register', formData);
      console.log('Registration successful:', response.data);
      alert('Register Successfully...');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <div>
           <header className="header">
 <a href="/" className="logo">diet</a>
 </header>
 <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Firstname:</label>
          <input
            type='text'
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <span className="error">{errors.firstname}</span>}
        </div>
        <div>
          <label>Lastname:</label>
          <input
            type='text'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Height:</label>
          <input
            type='number'
            name='height'
            value={formData.height}
            onChange={handleChange}
          />
          {errors.height && <span className="error">{errors.height}</span>}
        </div>
        <div>
          <label>Weight:</label>
          <input
            type='number'
            name='weight'
            value={formData.weight}
            onChange={handleChange}
          />
          {errors.weight && <span className="error">{errors.weight}</span>}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
    </div>
    
  );
}

export default Register;
