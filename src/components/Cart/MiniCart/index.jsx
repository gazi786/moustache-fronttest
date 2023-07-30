// MiniCart.js
import React from "react";

const MiniCart = ({ cartItems }) => {
  return (
    <div>
      <h3>Mini Cart</h3>
      {cartItems.map((item) => (
        <div key={item.size}>
          <p>{item.size}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};
export default MiniCart;
