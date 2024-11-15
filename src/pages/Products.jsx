import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles';
import laptop from '../assets/laptop.avif'
import headphone from '../assets/headphones.jpg'
import phone from '../assets/phone.jpg'
const products = [
  { id: 1, name: 'Laptop', price: 80000, image: laptop },
  { id: 2, name: 'Headphones', price: 1500, image: headphone },
  { id: 3, name: 'Smartphone', price: 16000, image: phone },
];

const Products = () => {
  return (
    <div style={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
