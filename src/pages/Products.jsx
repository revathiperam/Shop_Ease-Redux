// src/pages/Products.js
import React from 'react';
import ProductList from '../Components/ProductList'
import styles from '../styles';

const Products = () => {
  return (
    <div style={styles.page}>
      <h1>Available Products</h1>
      <div style={styles.productsContainer}>
      <ProductList />
      </div>
    </div>
  );
};

export default Products;
