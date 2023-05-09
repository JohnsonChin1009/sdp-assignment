import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with your Laravel API endpoint

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};