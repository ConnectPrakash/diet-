
import React from 'react'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
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
import DietPlan from './components/DietPlan'
import KetoDiet from './components/KetoDiet'
import MediterraneanDiet from './components/MediterraneanDiet'
import VeganDiet from './components/VeganDiet'
import PaleoDiet from './components/PaleoDiet'
import IntermittentFasting from './components/IntermittentFasting'
import DietPlanner from './components/DietPlanner'
import MealPlanner from './components/MealPlanner'

function Rootfile() {
  return (
    <div>
      <Router>
    
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
          <Route path="/diet-planner" element={<DietPlanner />} />
          <Route path="/diet/:id" element={<DietPlan/>} />
          <Route path="/keto" element={<KetoDiet />} />
          <Route path="/mediterranean" element={<MediterraneanDiet />} />
                    <Route path="/vegan" element={<VeganDiet />} />
                    <Route path="/paleo" element={<PaleoDiet />} />
                    <Route path="/intermittent-fasting" element={<IntermittentFasting />} />
                    <Route path='/mealplanner' element={<MealPlanner/>}/>
     
    <Route path='*' element={<h1>Not Found</h1>}/>

  </Routes>
</div>
   </Router>
    </div>
  )
}

export default Rootfile
