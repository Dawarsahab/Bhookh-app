// src/constants/styles.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  primary: '#FF4B2B',
  secondary: '#FF416C',
  background: '#F5F5F5',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#666666',
  lightGrey: '#DDDDDD',
  error: '#FF0000',
  success: '#4CAF50',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const typography = {
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
  },
  body: {
    fontSize: 16,
    color: colors.grey,
  },
  caption: {
    fontSize: 14,
    color: colors.grey,
  },
};

export const layout = {
  screenWidth: width,
  screenHeight: height,
  containerPadding: 20,
  borderRadius: 8,
};

export const shadows = {
  small: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 6,
  },
};