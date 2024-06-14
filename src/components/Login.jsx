// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://died-backend.onrender.com/login', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
      <p>If you don't have account <Link to='/sign up'>Sign Up</Link></p>
    </div>
  );
}

export default App;
