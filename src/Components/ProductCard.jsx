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
    <div style={{...styles.productCard}}>
      <div>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      </div>
      <button style={styles.button} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
