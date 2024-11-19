// src/api/productApi.js
import axios from 'axios';

// Fetch products from API
export const fetchProductsFromApi = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};
