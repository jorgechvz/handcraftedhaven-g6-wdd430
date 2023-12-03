import Image from 'next/image';
import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product">
      <Image src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
