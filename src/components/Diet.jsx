import React from 'react'
import './Diet.css'
function Diet() {
  return (
    <div>
      <section className='diet' id='diet'>

<h1 className='heading'>diet Plan</h1>

<ul className='controls'>
  <li className='buttons active' data-filter='all'>
    <img src="../src/components/smile.png" alt="default image" />
    <h3>all</h3>
  </li>
  <li className='buttons' data-filter='breakfast'>
    <img src="../src/components/breakfast-with-coffee-fresh-croissants_2829-17554.jpg" alt="" />
    <h3>breakfast</h3>
  </li>
  <li className='buttons' data-filter='lunch'>
    <img src="../src/components/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50746.jpg" alt="" />
    <h3>lunch</h3>
  </li>
  <li className='buttons' data-filter='dinner'>
    <img src="../src/components/high-angle-indian-food-assortment_23-2148747704.jpg" alt="" />
    <h3>dinner</h3>
  </li>
  
  
</ul>
<div className="image-container">
  <div className="box lunch">
    <div className="image">
      <img src='../src/components/breakfast1.jpeg' alt=''/>
    </div>
    <div className="content">
      <a href='https://www.bbcgoodfood.com/recipes/chia-oat-breakfast-scones-yogurt-and-berries?IGNORE_GEO_REDIRECT_GLOBAL=true&v=1760090971' className='link'>Chia & oat breakfast scones with yogurt and berries</a>
      <p>These healthy breakfast scones have a slightly bouncier texture than traditional ones, but make a lovely start to the day and provide folate, vitamin C and fibre.</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box dinner">
    <div className="image">
      <img src='../src/components/lunch1.jpeg' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://recipes.net/main-dish/soup/chickpea-soup-with-chunky-gremolata/' className='link'>Chickpea Soup with Chunky Gremolata</a>
      <p>This classic and versatile dish is not one to miss in the dinner table! Make delicious, warm soup with our comforting soup recipes</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box breakfast">
    <div className="image">
      <img src='../src/components/dinner1.jpg' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://foragerchef.com/raw-porcini-salad-with-chickweed-watercress-and-parmesan/' className='link'> PORCINI SALAD WITH GREENS AND PARMESAN</a>
      <p>A healthy, fresh mushroom salad served with parmesan and fresh greens dressed lightly with lemon juice (typically arugula) is a classic Italian salad recipe, and one everyone should try when the special moment comes that fresh, perfect porcini are on hand..</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box breakfast">
    <div className="image">
      <img src='../src/components/egg-wraps-1024x1536.webp' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://thebigmansworld.com/egg-wraps/' className='link'>Egg Wraps</a>
      <p>egg wraps are a zero carb and grain free alternative to traditional tortilla wraps! Fill them with your sandwich favorites like salads, deli meats, and more.</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box lunch">
    <div className="image">
      <img src='../src/components/Noodle-Salad-Creamy-Sesame-Peanut-Dressing_5.webp' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://www.recipetineats.com/noodle-salad-creamy-sesame-peanut-dressing/' className='link'>Noodle Salad with Sesame Peanut Dressing</a>
      <p>Asian Noodle Salad tossed with a wickedly delicious dressing that’s creamy, peanutty, with a hint of sesame, tang of lime and mild hit of chilli. I would die a happy girl if I drowned in this dressing (morbid but true). Great lunch idea for work because it’s super tasty served cold!</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box dinner">
    <div className="image">
      <img src='../src/components/paneer-jalfrezi-440-400-e63da48.webp' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://www.bbcgoodfood.com/recipes/paneer-jalfrezi-cumin-rice?IGNORE_GEO_REDIRECT_GLOBAL=true&v=1472756210' className='link'>Paneer jalfrezi with cumin rice</a>
      <p>Spice up your week with this satisfying, healthy, low-calorie veggie curry. It provides calcium, iron, vitamin C and fibre, along with three of your 5-a-day</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box dinner">
    <div className="image">
      <img src='../src/components/breakfast2.jpeg' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://www.everyday-phenomenal.com/blogs/tasty-tuesday/quinoa-peach-and-ginger-bircher' className='link'>QUINOA, PEACH AND GINGER BIRCHER</a>
      <p>These super quick, vegetarian Quinoa, Peach and Ginger Birchers are the perfect snack or breakfast. You can make them the night before and grab them on the go, so they’re great for when you’re in a rush.</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box dinner">
    <div className="image">
      <img src='../src/components/dinner2.webp' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://www.jamieoliver.com/recipes/pasta-recipes/aubergine-penne-arrabbiata/' className='link'>Aubergine penne arrabbiata</a>
      <p>.Penne arrabbiata is a classic Italian spicy pasta dish. Learn how delicious, yet quick and easy it is to make in the authentic Italian way! One of the things that frustrates me the most with Italian food in America.</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  <div className="box dinner">
    <div className="image">
      <img src='../src/components/lunch2.jpg' alt='default image'/>
    </div>
    <div className="content">
      <a href='https://simple-veganista.com/vegan-jambalaya/' className='link'>VEGAN JAMBALAYA</a>
      <p>gan Jambalaya – Loaded with veggies this Creole-style jambalaya is a hearty comfort food rice dish that’s easy to make using one-pot and everyday ingredients!

</p>
      <div className="icon">
        <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
        <a href='#'><i className='fas fa-user'></i>by admin</a>

      </div>
    </div>
  </div>
  
</div>
</section>
    </div>
  )
}

export default Diet
