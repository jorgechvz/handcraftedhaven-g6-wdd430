import React from 'react';

interface ProductFilterProps {
  categories: string[];
  handleFilterChange: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ categories, handleFilterChange }) => {
  return (
    <div className="product-filter">
      <label>Filter by Category:</label>
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;

