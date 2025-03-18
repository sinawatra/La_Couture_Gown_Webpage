"use client"

import { useState } from "react"
import "./GridGallery.css"

const GridGallery = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoverIndex, setHoverIndex] = useState(null)

  const products = [
    { id: 1, name: "Gown 1", price: "$10", stock: "In stock", image: "/images/g1.jpg", type: "Popular" },
    { id: 2, name: "Gown 2", price: "$83", stock: "In stock", image: "/images/g2.jpg", type: "Exotic" },
    { id: 3, name: "Gown 3", price: "$75", stock: "In stock", image: "/images/g3.jpg", type: "Khmer Style" },
    { id: 4, name: "Gown 4", price: "$90", stock: "In stock", image: "/images/g4.jpg", type: "International Style" },
    { id: 5, name: "Gown 5", price: "$10", stock: "In stock", image: "/images/g5.jpg", type: "Popular" },
    { id: 6, name: "Gown 6", price: "$83", stock: "In stock", image: "/images/g6.jpg", type: "Exotic" },
    { id: 7, name: "Gown 7", price: "$65", stock: "In stock", image: "/images/g7.jpg", type: "Khmer Style" },
    { id: 8, name: "Gown 8", price: "$90", stock: "In stock", image: "/images/g8.jpg", type: "International Style" },
    { id: 9, name: "Gown 9", price: "$10", stock: "In stock", image: "/images/g9.jpg", type: "Popular" },
    { id: 10, name: "Gown 10", price: "$35", stock: "In stock", image: "/images/g10.jpg", type: "Exotic" },
    { id: 11, name: "Gown 11", price: "$65", stock: "In stock", image: "/images/g11.jpg", type: "Khmer Style" },
    { id: 12, name: "Gown 12", price: "$90", stock: "In stock", image: "/images/g12.jpg", type: "International Style" },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.type === selectedCategory)

  const categories = ["All", "Popular", "Exotic", "Khmer Style", "International Style"]

  // Helper function to conditionally join classNames
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="grid-gallery-container">
      <div className="filter-bar">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={cn("category-btn", selectedCategory === category ? "active" : "")}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-gallery">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="gallery-item"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="image-container">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
              <div className={cn("overlay", hoverIndex === index ? "show" : "")}>
                <button
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="info">
              <h3 className="product-name">{product.name}</h3>
              <div className="price-stock">
                <p className="price">{product.price}</p>
                <p className="stock">{product.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridGallery

