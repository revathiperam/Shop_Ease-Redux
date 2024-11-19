const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    page: {
      textAlign: 'center',
      padding: '20px',
    },
    productsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
    },
    // Each individual product card
    productCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#fff',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 'auto', 
    },
    productCardHover: {
      transform: 'scale(1.05)',
    },
    // Product image styling
    productImage: {
      maxWidth: '100%',
      maxHeight: '180px',
      objectFit: 'contain',
      marginBottom: '16px',
    },
    // Typography styles
    productTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
      margin: '10px 0',
    },
    productDescription: {
      fontSize: '12px',
      color: '#666',
      margin: '10px 0',
    },
    productCategory: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#555',
      margin: '5px 0',
    },
    productPrice: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#007bff',
      margin: '10px 0',
    },
    productRating: {
      fontSize: '14px',
      color: '#f39c12',
      margin: '10px 0',
    },
    button: {
      background: 'orange',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px',
    },
    cartImage: {
      width: '25%',
      height: '25%',
      borderRadius: '4px',
      marginRight: '10px',
    },
    totalContainer: {
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginTop: '20px',
    },
    removeButton: {
      backgroundColor: '#FF5733',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    clearButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#6c757d',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  };
  
  export default styles;
  