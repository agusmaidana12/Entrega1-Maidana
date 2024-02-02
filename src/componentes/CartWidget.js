// src/componentes/CartWidget.js
import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

const CartWidget = () => {
  const itemsInCart = 5; // Número hardcodeado

  return (
    <div className="cart-widget">
      <FaCartArrowDown />
      <span className="badge badge-pill badge-danger">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
