import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';
import styles from '../styles';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total price of the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.page}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.cartImage} />
              <p>
                {item.name} x {item.quantity} = Rs{item.price * item.quantity}
              </p>
              <button
                style={styles.removeButton}
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
          <div style={styles.totalContainer}>
            <h2>Total: Rs.{totalPrice.toFixed(2)}</h2>
          </div>
          <button style={styles.clearButton} onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
