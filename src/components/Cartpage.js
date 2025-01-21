import React from 'react';
import './Cartpage.css';

const Cartpage = ({ cartItems }) => {
  // Calculate total price of items in the cart
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  // Handle the Checkout button click
  const handleCheckout = () => {
    const totalAmount = calculateTotal();

    if (totalAmount === 0) {
      alert('Your cart is empty. Please add items before checking out!');
      return;
    }

    // Construct the PayWay link with the dynamic total amount
    const payWayLink = `https://link.payway.com.kh/aba?id=D612C8ED46EE&code=342235&acc=001531813&amount=${totalAmount.toFixed(
      2
    )}&dynamic=true`;

    // Redirect the user to the PayWay link
    window.location.href = payWayLink;
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="cart">
          {/* Render cart items */}
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}

          {/* Total and Checkout */}
          <div className="cart-footer">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            <button className="checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h3>Your cart is empty.</h3>
      )}
    </div>
  );
};

export default Cartpage;
