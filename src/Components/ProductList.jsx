import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import styles from '../styles';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (loading) {
    return <div style={styles.page}>Loading products...</div>;
  }

  return (
    <div style={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
