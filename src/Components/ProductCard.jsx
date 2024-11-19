import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import styles from '../styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div
      style={styles.productCard}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src={product.image} alt={product.title} style={styles.productImage} />
      <h3 style={styles.productTitle}>{product.title}</h3>
      <p style={styles.productCategory}><strong>Category:</strong> {product.category}</p>
      <p style={styles.productPrice}><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p style={styles.productRating}><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
      <p style={styles.productDescription}>{product.description}</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
