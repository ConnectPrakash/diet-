// Vegan.jsx

import React from 'react';
import './VeganDiet.css';

function VeganDiet() {
    return (
        <div className="vegan-diet">
            <h2>Vegan Diet</h2>
            <p>
                The vegan diet is a plant-based diet that excludes all animal products, including meat, dairy, eggs, and even honey. It focuses on consuming fruits, vegetables, grains, legumes, nuts, and seeds. Vegans choose this diet for ethical, environmental, and health reasons.
            </p>
            <h3>Key Features</h3>
            <ul>
                <li>Excludes all animal products (meat, dairy, eggs, honey)</li>
                <li>Includes plant-based foods like fruits, vegetables, grains, legumes, nuts, and seeds</li>
                <li>May require supplementation of nutrients like vitamin B12, vitamin D, and omega-3 fatty acids</li>
                <li>Varied approaches: Whole-food vegan, raw vegan, junk-food vegan, etc.</li>
            </ul>
            <h3>Benefits</h3>
            <ul>
                <li>Heart health: Lower risk of heart disease and hypertension</li>
                <li>Weight management: Supports healthy weight loss and maintenance</li>
                <li>Environmental impact: Reduced carbon footprint compared to animal-based diets</li>
                <li>Animal welfare: Supports ethical treatment of animals</li>
                <li>Disease prevention: Lower risk of certain cancers and chronic diseases</li>
            </ul>
        </div>
    );
}

export default VeganDiet;
