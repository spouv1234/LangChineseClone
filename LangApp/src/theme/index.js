import { Platform } from 'react-native';

export const colors = {
  // System Colors
  systemBlue: '#007AFF',
  systemGreen: '#34C759',
  systemIndigo: '#5856D6',
  systemOrange: '#FF9500',
  systemPink: '#FF2D55',
  systemPurple: '#AF52DE',
  systemRed: '#FF3B30',
  systemTeal: '#5AC8FA',
  systemYellow: '#FFCC00',
  
  // Semantic Colors
  label: {
    primary: '#000000',
    secondary: '#3C3C43',
    tertiary: '#3C3C43',
    quaternary: '#3C3C43',
  },
  
  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F7',
    tertiary: '#FFFFFF',
  },
  
  // Fill Colors
  fill: {
    primary: '#787880',
    secondary: '#787880',
    tertiary: '#787880',
    quaternary: '#787880',
  },
  
  // Separator Colors
  separator: {
    opaque: '#C6C6C8',
    nonOpaque: '#C6C6C8',
  },
};

export const typography = {
  // Font Sizes
  fontSize: {
    largeTitle: 34,
    title1: 28,
    title2: 22,
    title3: 20,
    headline: 17,
    body: 17,
    callout: 16,
    subhead: 15,
    footnote: 13,
    caption1: 12,
    caption2: 11,
  },
  
  // Font Weights
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line Heights
  lineHeight: {
    largeTitle: 41,
    title1: 34,
    title2: 28,
    title3: 25,
    headline: 22,
    body: 22,
    callout: 21,
    subhead: 20,
    footnote: 18,
    caption1: 16,
    caption2: 13,
  },
};

export const spacing = {
  // System Spacing
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  
  // Component Spacing
  safeArea: Platform.OS === 'ios' ? 20 : 0,
  screenPadding: 16,
  cardPadding: 16,
  listItemPadding: 16,
};

export const borderRadius = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
}; 