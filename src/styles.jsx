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
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      padding: '20px',
    },
    productCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      width: '200px',
    },
    productImage: {
      width: '100%',
      borderRadius: '8px',
    },
    button: {
      marginTop: '10px',
      padding: '8px 12px',
      backgroundColor: 'orange',
      color: '#fff',
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
  