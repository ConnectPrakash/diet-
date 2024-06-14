import React from 'react'
import './Reviews.css'

function Reviews() {
  return (
    <div>
        <section className="reviews" id="reviews">

<h1 className="heading">clients reviews</h1>


    <div className="swiper-slide slide">

      <p>As someone with dietary restrictions, I was skeptical about finding a diet app that would cater to my needs. However, the Diets app exceeded my expectations! It offers a wide variety of recipes that can be easily filtered based on dietary preferences and restrictions. I no longer feel limited in my meal options, and I'm grateful for the support this app provides on my journey to better health."</p>
      <div className="user">
        <img src='../src/components/pro4.jpeg' alt='default image'/>
        <div className='info'>

          <h3>
            Hari Baskar

          </h3>
          <span>client</span>
        </div>
      </div>
    </div>
     <div className="swiper-slide slide">

      <p>HealthyEats.com has been a game-changer for me! The variety of recipes and meal plans cater to all dietary preferences, whether you're vegan, gluten-free, or just looking to eat cleaner. The site is user-friendly, with easy-to-follow instructions and nutrition information provided for each recipe. Plus, the community aspect is fantastic – I love being able to connect with other members for support and recipe ideas. Highly recommend!</p>
      <div className="user">
        <img src='../src/components/pro1.jpeg' alt=''/>
        <div className='info'>
      
          <h3>
            John deo
      
          </h3>
          <span>client</span>
        </div>
      </div>
    </div>
    <div className="swiper-slide slide">
    
      <p>I've tried countless diet apps in the past, but none compare to the Diets app. What sets it apart is its user-friendly interface and extensive library of recipes. I love how I can easily search for recipes based on ingredients I already have at home. Plus, the ability to track my progress and set reminders keeps me motivated to stay on track with my health goals. Highly recommend this app to anyone looking to make positive changes to their diet!"</p>
      <div className="user">
        <img src='../src/components/pro2.jpeg' alt=''/>
        <div className='info'>
      
          <h3>
            John deo
      
          </h3>
          <span>client</span>
        </div>
      </div>
    </div>
<div className="swiper-slide slide">

<p>The Diets app has been a lifesaver for me! As a busy professional, I struggled to find the time to plan and prepare healthy meals. This app has made it so much easier with its diverse range of recipes and customizable meal plans. I've already lost 10 pounds in just a few weeks, and I feel more energetic than ever. Thank you, Diets app!"</p>
<div className="user">
<img src='../src/components/pro3.jpeg' alt=''/>
<div className='info'>

<h3>
John deo

</h3>
<span>client</span>
</div>
</div>
</div>
{/* <div className="swiper-slide slide">

<p>....</p>
<div className="user">
<img src='' alt=''/>
<div className='info'>

<h3>
John deo

</h3>
<span>client</span>
</div>
</div>
</div>
<div className="swiper-slide slide">

<p>....</p>
<div className="user">
<img src='' alt=''/>
<div className='info'>

<h3>
John deo

</h3>
<span>client</span>
</div>
</div>
</div> */}
  
</section>
<section className="newsletter">

<div className="content">
  <h1 className="heading">subscribe now</h1>
  <p>.....</p>
  <form action=''>
    <input type='email' placeholder='enter your email' className='email'/>
    <input type="submit" value="subscribe" className='btn' />
  </form>
</div>
</section>
<section className='footer'>

<div className="box-container">

  <div className="box">
    <h3>quick links</h3>
    <a href='#home'> <i className='fas fa-arrow-right'></i>home</a>
    <a href='#about'> <i className='fas fa-arrow-right'></i>about</a>
    <a href='#services'> <i className='fas fa-arrow-right'></i>services</a>
    <a href='#diet'> <i className='fas fa-arrow-right'></i>diet</a>
    <a href='#blog'> <i className='fas fa-arrow-right'></i>blog</a>
    <a href='#reviews'> <i className='fas fa-arrow-right'></i>reviews</a>
  </div>

  <div className="box">
    <h3>extra links</h3>
    <a href='#'> <i className='fas fa-arrow-right'></i>my account</a>
    <a href='#'> <i className='fas fa-arrow-right'></i>my order</a>
    <a href='#'> <i className='fas fa-arrow-right'></i>my wishlist</a>
    <a href='#'> <i className='fas fa-arrow-right'></i>ask questions</a>
    <a href='#'> <i className='fas fa-arrow-right'></i>terms of use</a>
    <a href='#'> <i className='fas fa-arrow-right'></i>privacy policy</a>
  </div>

  <div className="box">
    <h3>contact info</h3>
    <a href='#'> <i className='fas fa-phone'></i>+123-456-7890</a>
    <a href='#'> <i className='fas fa-phone'></i>+123-789-456</a>
    <a href='#'> <i className='fas fa-envelope'></i>pp3662504@gmail.com</a>
    <a href='#'> <i className='fas fa-map'></i>karachi, pak -12233</a>
 
  </div>
  <div className="box">
    <h3>follow us</h3>
    <a href='#'> <i className='fas fa-facebook-f'></i>facebook</a>
    <a href='#'> <i className='fas fa-twitter'></i>twitter</a>
    <a href='#'> <i className='fas fa-instagram'></i>instagram</a>
    <a href='#'> <i className='fas fa-linkedin'></i>linkedin</a>
    <a href='#'> <i className='fas fa-github'></i>github</a>
 
  </div>
</div>

<div className='credit'>created by <span>Prakash</span> |all rights are reserved!</div>
</section>
    </div>
  )
}

export default Reviews
