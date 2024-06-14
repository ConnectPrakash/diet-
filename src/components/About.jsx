import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div>
      <section className="about" id="about">
        <h1 className="heading">about us</h1>
        <div className="row">
          <div className="content">
            <h3>my mission is to give you a guideline for your health.</h3>
            <p>
              {" "}
              You need to begin thinking of food in terms of the amount of
              macronutrients—protein, carbs, and fat— it provides, and try to
              keep track of the foods you get those nutrients from (more on this
              below). Your protein needs should come from chicken breasts; whole
              eggs (and egg whites, for pure protein); lean cuts of beef; fish;
              turkey; and protein powder. Your carbohydrates can come from
              potatoes, sweet potatoes, rice (white or brown), oats, fruits, and
              vegetables. As for fat, most of it will come as a by-product of
              your protein foods, but you can also derive fat from avocados,
              nuts, nut butters, seeds, and a small amount of oil such as
              coconut or olive.{" "}
            </p>
            <a
              href="https://www.nin.res.in/downloads/DietaryGuidelinesforNINwebsite.pdf"
              className="btn"
            >
              read more
            </a>
          </div>

          <div className="image">
            <img
              src="../src/components/Red-Apple-Fruit-PNG-High-Quality-Image.png"
              alt="default image"
            ></img>
          </div>
        </div>
      </section>
    </div>
   
   
   </>
  );
}

export default About
