
export class User {
    constructor(data) {
      this.id = data.id || '';
      this.username = data.username || '';
      this.name = data.name || '';
      this.preferences = data.preferences || {};
    }
  
    static validate(userData) {
      const errors = {};
      
      if (!userData.username) {
        errors.username = 'Username is required';
      }
      
      if (!userData.password) {
        errors.password = 'Password is required';
      } else if (userData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      
      return {
        isValid: Object.keys(errors).length === 0,
        errors
      };
    }
  
    toJSON() {
      return {
        id: this.id,
        username: this.username,
        name: this.name,
        preferences: this.preferences
      };
    }
  }