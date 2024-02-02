// src/componentes/Item.js
import React from 'react';

const Item = ({ name, description, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: ${price}</p>
        <a href="/" className="btn btn-primary">
          Agregar al Carrito
        </a>
      </div>
    </div>
  );
};

export default Item;
