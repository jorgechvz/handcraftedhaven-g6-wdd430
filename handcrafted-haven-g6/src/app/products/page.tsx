// import React, { useState, useEffect } from 'react';
// import ProductList from '@/components/productList';
// import ProductFilter from '@/components/productFilter';

// interface ProductPageProps {}
// // 
// const ProductPage: React.FC<ProductPageProps> = () => {
//   const [products, setProducts] = useState<{
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     price: number;
//   }[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<{
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     price: number;
//   }[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');

//   useEffect(() => {
   
//     const fetchedProducts = /* API call to fetch products */;
//     const fetchedCategories = /* API call to fetch categories */;

//     setProducts(fetchedProducts);
//     setFilteredProducts(fetchedProducts);
//     setCategories(fetchedCategories);
//   }, []);

//   const handleFilterChange = (category: string) => {
//     setSelectedCategory(category);

//     if (category === '') {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((product) => product.category === category);
//       setFilteredProducts(filtered);
//     }
//   };

//   return (
//     <div className="product-page">
//       <h2>Handcrafted Treasures</h2>
//       <ProductFilter categories={categories} handleFilterChange={handleFilterChange} />
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// };

// export default ProductPage;
