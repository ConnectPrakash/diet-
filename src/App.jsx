import React from 'react'
import {BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import Activity from './components/Activity'
import Profile from './components/Profile'
import About from './components/About';
import Services from './components/Services';
import Diet from './components/Diet';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import CaloriesCalculator from './components/CaloriesCalculator';
import './App.css'
function App() {
  return (
   <Router>
      <header className="header">
          <a href="#" className="logo">diet</a>
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
<div>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/activity' element={<Activity/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/calories-calculator" element={<CaloriesCalculator/>} />

    <Route path='*' element={<h1>Not Found</h1>}/>

  </Routes>
</div>
   </Router>
  )
}

export default App
