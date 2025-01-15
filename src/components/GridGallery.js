import React, { useState } from "react";
import "../components/GridGallery.css";

const GridGallery = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // State to track selected category

  const products = [
    { id: 1, name: "Gown 1", price: "$785", stock: "In stock", image: "/images/g1.jpg", type: "Popular" },
    { id: 2, name: "Gown 2", price: "$8350", stock: "In stock", image: "/images/g2.jpg", type: "Exotic" },
    { id: 3, name: "Gown 3", price: "$5422", stock: "In stock", image: "/images/g3.jpg", type: "Khmer Style" },
    { id: 4, name: "Gown 4", price: "$3012", stock: "In stock", image: "/images/g4.jpg", type: "International Style" },
    { id: 5, name: "Gown 5", price: "$7000", stock: "In stock", image: "/images/g5.jpg", type: "Popular" },
    { id: 6, name: "Gown 6", price: "$389", stock: "In stock", image: "/images/g6.jpg", type: "Exotic" },
    { id: 7, name: "Gown 7", price: "$4000", stock: "In stock", image: "/images/g7.jpg", type: "Khmer Style" },
    { id: 8, name: "Gown 8", price: "$7820", stock: "In stock", image: "/images/g8.jpg", type: "International Style" },
    { id: 9, name: "Gown 9", price: "$3111", stock: "In stock", image: "/images/g9.jpg", type: "Popular" },
    { id: 10, name: "Gown 10", price: "$333", stock: "In stock", image: "/images/g10.jpg", type: "Exotic" },
    { id: 11, name: "Gown 11", price: "$4699", stock: "In stock", image: "/images/g11.jpg", type: "Khmer Style" },
    { id: 12, name: "Gown 12", price: "$8400", stock: "In stock", image: "/images/g12.jpg", type: "International Style" },
  ];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.type === selectedCategory);

  return (
    <div className="grid-gallery-container">
      <div className="filter-bar">
        {/* Category buttons */}
        <div className="categories">
          {["All", "Popular", "Exotic", "Khmer Style", "International Style"].map((category) => (
            <span
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)} // Update selected category
            >
              {category}
            </span>
          ))}
        </div>

        {/* Dropdown filter */}
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category
        >
          <option value="All">All</option>
          <option value="Popular">Popular</option>
          <option value="Exotic">Exotic</option>
          <option value="Khmer Style">Khmer Style</option>
          <option value="International Style">International Style</option>
        </select>
      </div>

      {/* Product grid */}
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
