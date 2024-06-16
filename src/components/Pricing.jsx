import React from 'react'
import './Pricing.css'
import Product from './Product'
function Pricing() {
  return (
    <div>
       <header className="header">
 <a href="/" className="logo">diet</a>
 </header>
   <section className='pricing' id='pricing'>

<h1 className="heading">Pricing Plan</h1>

<div className="box-container">

  <div className="box active">

    <h3 className="title">Basic</h3>

    <div className="price">
      <span className='currency'>$</span>
      <span className='amount'>30</span>
      <span className='duration'>/year</span>
    </div>

    <ul>
      <li><i className='fas fa-check'></i>Nutrition Plan</li>
      <li><i className='fas fa-check'></i>Training Plan</li>
      <li><i className='fas fa-check'></i>Body Measurement</li>
    </ul>

    <p>30 days consultation</p>
    <p>3 personal meetings</p>
    <p>$20 access to additional materials</p>
    <a href='#' className='btn'>Read More</a>
  </div>

  <div className="box active">

    <h3 className="title">Standard</h3>

    <div className="price">
      <span className='currency'>$</span>
      <span className='amount'>60</span>
      <span className='duration'>/year</span>
    </div>

    <ul>
      <li><i className='fas fa-check'></i>Nutrition Plan</li>
      <li><i className='fas fa-check'></i>Training Plan</li>
      <li><i className='fas fa-check'></i>Body Measurement</li>
    </ul>

    <p>60 days consultation</p>
    <p>10 personal meetings</p>
    <p>Free access to additional materials</p>
    <a href='#' className='btn'>Read More</a>
  </div>

  <div className="box active">

    <h3 className="title">Premium</h3>

    <div className="price">
      <span className='currency'>$</span>
      <span className='amount'>90</span>
      <span className='duration'>/year</span>
    </div>

    <ul>
      <li><i className='fas fa-check'></i>Nutrition Plan</li>
      <li><i className='fas fa-check'></i>Training Plan</li>
      <li><i className='fas fa-check'></i>Body Measurement</li>
    </ul>

    <p>90 days consultation</p>
    <p>15 personal meetings</p>
    <p>Free access to additional materials</p>
    <a href='#' className='btn'>Read More</a>
  </div>

</div>
</section>
<h2>Products</h2>
<Product/>
    </div>
  )
}

export default Pricing
