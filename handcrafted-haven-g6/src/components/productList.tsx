import React from 'react';
import Product from './product';

interface ProductListProps {
  products: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
