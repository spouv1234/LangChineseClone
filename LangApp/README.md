# DuChinese - Chinese Learning App

A React Native application built with Expo for learning Chinese through interactive lessons and stories.

## Features

- 🎨 iOS Human Interface Guidelines compliant design
- 🌓 Light and dark theme support
- 📱 Cross-platform (iOS, Android)
- 🈺 Chinese character writing practice
- 🔤 Pinyin support
- 📚 Interactive lessons

## Recent Optimizations

The codebase has been optimized for better performance and maintainability:

- **Unified Text Component**: Consolidated multiple text components into a single, efficient `Text` component that follows iOS HIG
- **Optimized Dependencies**: Removed unused dependencies and simplified the babel configuration
- **Clean Architecture**: Removed duplicate code and unused components
- **Type Safety**: Enhanced TypeScript implementation

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Paper
- Hanzi Writer (for Chinese character writing)

## Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Running the app**
   ```bash
   npx expo start
   ```
   Then:
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator
   - Scan QR code with Expo Go app for physical device

## Project Structure

```
LangApp/
├── app/                 # Main application screens
├── assets/             # Images, fonts, and other static files
├── components/         # Reusable UI components
├── constants/          # Theme, colors, and other constants
└── src/               # Core application logic
    ├── navigation/    # Navigation configuration
    └── screens/       # Screen components
```

## Component Usage

### Text Component
The unified Text component follows iOS Human Interface Guidelines:

```tsx
import { Text } from '@/components/Text';

// Title text
<Text variant="title1">Welcome to DuChinese</Text>

// Body text
<Text variant="body">Learn Chinese with ease</Text>

// Custom styled text
<Text variant="headline" color="#007AFF">Start Learning</Text>
```

## Theme System

The app uses a semantic color system that automatically adapts to light and dark modes:

```tsx
import { semanticColors } from '@/constants/Colors';

// Colors automatically adapt to theme
backgroundColor: semanticColors.background
textColor: semanticColors.text
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
