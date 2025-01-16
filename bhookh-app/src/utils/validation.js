// src/utils/validation.js
import { mockUsers } from '../constants/mockUsers';

export const validateLogin = (username, password) => {
  // Check for empty fields
  if (!username || !password) {
    return {
      isValid: false,
      error: 'Please fill in all fields'
    };
  }

  // Check username format
  if (username.length < 3) {
    return {
      isValid: false,
      error: 'Username must be at least 3 characters long'
    };
  }

  // Check password format
  if (password.length < 6) {
    return {
      isValid: false,
      error: 'Password must be at least 6 characters long'
    };
  }

  // Check credentials against mock users
  const user = mockUsers.find(
    user => user.username === username && user.password === password
  );

  if (!user) {
    return {
      isValid: false,
      error: 'Invalid credentials'
    };
  }

  return {
    isValid: true,
    user
  };
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Invalid email format'
    };
  }
  return {
    isValid: true
  };
};

export const validatePassword = (password) => {
  if (!password) {
    return {
      isValid: false,
      error: 'Password is required'
    };
  }
  if (password.length < 6) {
    return {
      isValid: false,
      error: 'Password must be at least 6 characters long'
    };
  }
  // Add more password validation rules as needed
  return {
    isValid: true
  };
};

export const validateName = (name) => {
  if (!name) {
    return {
      isValid: false,
      error: 'Name is required'
    };
  }
  if (name.length < 2) {
    return {
      isValid: false,
      error: 'Name must be at least 2 characters long'
    };
  }
  return {
    isValid: true
  };
};