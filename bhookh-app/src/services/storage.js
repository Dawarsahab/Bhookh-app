// src/services/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from '../constants/config';

class StorageService {
  async saveUserToken(token) {
    try {
      await AsyncStorage.setItem(config.STORAGE_KEYS.USER_TOKEN, token);
    } catch (error) {
      throw new Error('Error saving user token');
    }
  }

  async getUserToken() {
    try {
      return await AsyncStorage.getItem(config.STORAGE_KEYS.USER_TOKEN);
    } catch (error) {
      throw new Error('Error getting user token');
    }
  }

  async removeUserToken() {
    try {
      await AsyncStorage.removeItem(config.STORAGE_KEYS.USER_TOKEN);
    } catch (error) {
      throw new Error('Error removing user token');
    }
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      throw new Error('Error clearing storage');
    }
  }
}

export const storageService = new StorageService();