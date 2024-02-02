// src/componentes/ItemList.js
import React from 'react';
import Item from './Item';

const ItemList = () => {
  const products = [
    { id: 1, name: 'Jordan 1 Retro', description: 'Talle 39', price: 29.99  },
    { id: 2, name: 'Nike Dunk Sb', description: 'Talle 42', price: 39.99 },
    { id: 3, name: 'Air Force 1', description: 'Talle 41', price: 49.99 },
    { id: 4, name: 'Jordan 4', description: 'Talle 36', price: 59.99 },
    { id: 5, name: 'Vans', description: 'Talle 43', price: 64.99 },
    
  ];

  return (
    <div className="row mt-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
