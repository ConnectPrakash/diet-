import React from 'react';
import './Product.css';

function Product() {
  const products = [
    {
      imgSrc: '../src/components/product1.jpeg',
      description: 'NutriFlair Keto Diet Pills 1600mg - Advanced Weight Loss Ketosis Supplement - BHB Salts (beta hydroxybutyrate) Ketogenic Fat Burner and Carb Blocker - Best Keto Capsules - Keto Pills for Women and Men',
      price: '$15.99',
    },
    {
      imgSrc: '../src/components/product2.jpg',
      description: '(3 Pack) Proton Keto Gummies Apple Cider Vinegar Supplement with Folic Acid Beet Root, Keto + ACV Gummies for Detox & Weight Management for Woman and Man (180 Gummies)',
      price: '$42.97',
    },
    {
      imgSrc: '../src/components/product3.webp',
      description: 'NutriFlair Keto Diet Pills 1600mg - Advanced Weight Loss Ketosis Supplement - BHB Salts (beta hydroxybutyrate) Ketogenic Fat Burner and Carb Blocker - Best Keto Capsules - Keto Pills for Women and Men',
      price: '$15.99',
    }
  ];

  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <div key={index} className='product'>
          <img src={product.imgSrc} alt='default' />
          <p>{product.description}</p>
          <h2>{product.price}</h2>
          <button>Order Now</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
