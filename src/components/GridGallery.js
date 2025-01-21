import React, { useState } from 'react';
import './GridGallery.css';

const GridGallery = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'Gown 1', price: '$1', stock: 'In stock', image: '/images/g1.jpg', type: 'Popular' },
    { id: 2, name: 'Gown 2', price: '$835', stock: 'In stock', image: '/images/g2.jpg', type: 'Exotic' },
    { id: 3, name: 'Gown 3', price: '$650', stock: 'In stock', image: '/images/g3.jpg', type: 'Khmer Style' },
    { id: 4, name: 'Gown 4', price: '$900', stock: 'In stock', image: '/images/g4.jpg', type: 'International Style' },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.type === selectedCategory);

  return (
    <div className="grid-gallery-container">
      <div className="filter-bar">
        <div className="categories">
          {['All', 'Popular', 'Exotic', 'Khmer Style', 'International Style'].map((category) => (
            <span
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="grid-gallery">
        {filteredProducts.map((product) => (
          <div key={product.id} className="gallery-item">
            <img src={product.image} alt={product.name} />
            <div className="info">
              <p className="price">{product.price}</p>
              <p className="stock">{product.stock}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;
