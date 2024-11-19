// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../styles';

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.navLink}>Home</Link>
      <Link to="/products" style={styles.navLink}>Products</Link>
      <Link to="/cart" style={styles.navLink}>
        Cart ({totalQuantity})
      </Link>
    </nav>
  );
};

export default Navbar;
