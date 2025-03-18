"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Cartpage.css"
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag } from "react-icons/fi"

const Cartpage = ({ cartItems: initialCartItems = [] }) => {
  const [cartItems, setCartItems] = useState(initialCartItems.map((item) => ({ ...item, quantity: 1 })))

  // Calculate total price of items in the cart
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + Number.parseFloat(item.price.slice(1)) * item.quantity, 0)

  // Handle the Checkout button click
  const handleCheckout = () => {
    const totalAmount = calculateTotal()

    if (totalAmount === 0) {
      alert("Your cart is empty. Please add items before checking out!")
      return
    }

    // Construct the PayWay link with the dynamic total amount
    const payWayLink = `https://link.payway.com.kh/aba?id=D612C8ED46EE&code=342235&acc=001531813&amount=${totalAmount.toFixed(
      2,
    )}&dynamic=true`

    // Redirect the user to the PayWay link
    window.location.href = payWayLink
  }

  // Handle quantity change
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return

    const updatedCart = [...cartItems]
    updatedCart[index].quantity = newQuantity
    setCartItems(updatedCart)
  }

  // Handle removing an item
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index)
    setCartItems(updatedCart)
  }

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header-section">
          <h1>Your Shopping Cart</h1>
          <p className="cart-subtitle">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="cart-grid">
              <div className="cart-header">
                <div className="header-product">Product</div>
                <div className="header-price">Price</div>
                <div className="header-quantity">Quantity</div>
                <div className="header-total">Total</div>
                <div className="header-actions"></div>
              </div>

              {cartItems.map((item, index) => {
                const itemPrice = Number.parseFloat(item.price.slice(1))
                const itemTotal = itemPrice * item.quantity

                return (
                  <div key={index} className="cart-item">
                    <div className="cart-product-info">
                      <div className="cart-product-image">
                        <img src={item.image || "/placeholder.svg"} alt={item.name} />
                      </div>
                      <div className="cart-product-details">
                        <h3>{item.name}</h3>
                        <p className="cart-product-type">{item.type}</p>
                      </div>
                    </div>

                    <div className="cart-item-price">{item.price}</div>

                    <div className="cart-quantity-controls">
                      <button
                        className="cart-quantity-btn"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button className="cart-quantity-btn" onClick={() => updateQuantity(index, item.quantity + 1)}>
                        <FiPlus />
                      </button>
                    </div>

                    <div className="cart-item-total">${itemTotal.toFixed(2)}</div>

                    <div className="cart-item-actions">
                      <button className="cart-remove-btn" onClick={() => removeItem(index)}>
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-section">
                <div className="cart-totals">
                  <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="cart-shipping">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="cart-total">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="cart-clear-btn" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="cart-checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>

              <Link to="/gallery" className="cart-continue-shopping">
                <FiArrowLeft /> Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <FiShoppingBag size={60} />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/gallery" className="cart-start-shopping-btn">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cartpage

