import React from "react";
import "./Cart.css";

export default function Cart({ cart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  
                  <div className="cart-info">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>

            <div className="cart-buttons">
              <button onClick={onClose}>Continue Shopping</button>
              <button className="checkout">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}