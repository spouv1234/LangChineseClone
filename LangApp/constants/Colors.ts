/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

// iOS system colors
export const systemColors = {
  primary: '#007AFF', // iOS blue
  secondary: '#5856D6', // iOS purple
  success: '#34C759', // iOS green
  warning: '#FF9500', // iOS orange
  error: '#FF3B30', // iOS red
  gray: '#8E8E93',
  gray2: '#AEAEB2',
  gray3: '#C7C7CC',
  gray4: '#D1D1D6',
  gray5: '#E5E5EA',
  gray6: '#F2F2F7',
};

// Semantic colors
export const semanticColors = {
  background: Platform.select({
    ios: '#FFFFFF',
    default: '#FFFFFF',
  }),
  secondaryBackground: Platform.select({
    ios: '#F2F2F7',
    default: '#F2F2F7',
  }),
  text: Platform.select({
    ios: '#000000',
    default: '#000000',
  }),
  secondaryText: Platform.select({
    ios: '#8E8E93',
    default: '#8E8E93',
  }),
  border: Platform.select({
    ios: '#C7C7CC',
    default: '#C7C7CC',
  }),
};

// Typography scale following iOS standards
export const typography = {
  largeTitle: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.37,
    fontWeight: '700' as const,
  },
  title1: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.36,
    fontWeight: '600' as const,
  },
  title2: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.35,
    fontWeight: '600' as const,
  },
  title3: {
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
    fontWeight: '600' as const,
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.24,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.24,
    fontWeight: '400' as const,
  },
  callout: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    fontWeight: '400' as const,
  },
  subhead: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    fontWeight: '400' as const,
  },
  footnote: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
    fontWeight: '400' as const,
  },
  caption1: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: '400' as const,
  },
  caption2: {
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.06,
    fontWeight: '400' as const,
  },
};

// Layout metrics
export const layout = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    small: 6,
    medium: 8,
    large: 12,
  },
};

export default {
  systemColors,
  semanticColors,
  typography,
  layout,
};
