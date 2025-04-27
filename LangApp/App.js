import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme = {
    ...useTheme(),
    colors: {
      ...useTheme().colors,
      primary: isDark ? '#FF4B4B' : '#007AFF',
      background: isDark ? '#000000' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#000000',
      card: isDark ? '#1C1C1E' : '#FFFFFF',
      border: isDark ? '#38383A' : '#C6C6C8',
    },
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
} 