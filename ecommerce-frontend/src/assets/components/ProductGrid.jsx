import React from 'react';

const ProductGrid = ({ title, products }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
