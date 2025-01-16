// src/constants/strings.js
export const strings = {
    // App
    appName: 'Bhookh App',
    
    // Login Screen
    loginTitle: 'Welcome Back',
    usernamePlaceholder: 'Enter your username',
    passwordPlaceholder: 'Enter your password',
    loginButton: 'Login',
    loginError: 'Invalid credentials',
    emptyFieldsError: 'Please fill in all fields',
    
    // Home Screen
    welcomeMessage: 'Hello, ',
    recipesTitle: 'Popular Recipes',
    noRecipesMessage: 'No recipes available',
    refreshing: 'Refreshing...',
    
    // Error Messages
    genericError: 'Something went wrong',
    networkError: 'Network error. Please check your connection',
    apiError: 'Failed to fetch recipes',
    
    // Loading Messages
    loading: 'Loading...',
    pleaseWait: 'Please wait...',
    
    // Success Messages
    loginSuccess: 'Login successful',
    
    // Recipe Card
    readMore: 'Read More',
    ingredients: 'Ingredients',
    instructions: 'Instructions',
    
    // Validation Messages
    invalidUsername: 'Please enter a valid username',
    invalidPassword: 'Password must be at least 6 characters',
    
    // Button Labels
    retry: 'Retry',
    cancel: 'Cancel',
    confirm: 'Confirm',
    
    // Accessibility Labels
    recipeImage: 'Recipe image',
    loginForm: 'Login form',
    loadingSpinner: 'Loading content',
  };
  
  // Error messages that can be used with template literals
  export const errorMessages = {
    fieldRequired: field => `${field} is required`,
    invalidFormat: field => `Invalid ${field.toLowerCase()} format`,
    minimumLength: (field, length) => 
      `${field} must be at least ${length} characters long`,
    maximumLength: (field, length) => 
      `${field} cannot exceed ${length} characters`,
  };