import React from 'react';
import { Text as RNText, TextProps, Platform } from 'react-native';
import { typography, semanticColors } from '../constants/Colors';

/**
 * UnifiedTextProps extends React Native's TextProps to include:
 * @property {keyof typeof typography} variant - Typography style variant (e.g., 'body', 'title1')
 * @property {string} color - Text color override
 * @property {string} lightColor - Color to use in light theme
 * @property {string} darkColor - Color to use in dark theme
 */
export interface UnifiedTextProps extends TextProps {
  variant?: keyof typeof typography;
  color?: string;
  lightColor?: string;
  darkColor?: string;
}

/**
 * A unified Text component that implements iOS Human Interface Guidelines
 * for typography and supports both light and dark themes.
 * 
 * @example
 * ```tsx
 * <Text variant="title1" color="#007AFF">Hello World</Text>
 * <Text variant="body">Regular text content</Text>
 * ```
 */
export function Text({
  variant = 'body',
  style,
  color,
  lightColor,
  darkColor,
  ...props
}: UnifiedTextProps) {
  // Use provided color or fall back to semantic text color
  const textColor = color || semanticColors.text;

  return (
    <RNText
      style={[
        // Apply typography styles based on variant
        typography[variant],
        {
          color: textColor,
          // Use system font on iOS for native feel
          ...Platform.select({
            ios: {
              fontFamily: 'System',
            },
            default: {},
          }),
        },
        // Apply any custom styles passed as props
        style,
      ]}
      {...props}
    />
  );
} 