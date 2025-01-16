// src/services/api.js
import { config } from '../constants/config';

class ApiService {
  constructor() {
    this.baseURL = config.API_BASE_URL;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) throw new Error('API request failed');
      return await response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('API request failed');
      return await response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  }
}

export const apiService = new ApiService();