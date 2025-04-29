import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

// Import screens
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import LessonsScreen from '../screens/LessonsScreen';
import DictionaryScreen from '../screens/DictionaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background.primary,
      },
      headerTintColor: colors.label.primary,
      headerTitleStyle: {
        fontWeight: '600',
      },
    }}
  >
    <Stack.Screen 
      name="Home" 
      component={HomeScreen}
    />
    <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
  </Stack.Navigator>
);

const LessonsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background.primary,
      },
      headerTintColor: colors.label.primary,
      headerTitleStyle: {
        fontWeight: '600',
      },
    }}
  >
    <Stack.Screen name="Lessons" component={LessonsScreen} />
    <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
  </Stack.Navigator>
);

const DictionaryStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background.primary,
      },
      headerTintColor: colors.label.primary,
      headerTitleStyle: {
        fontWeight: '600',
      },
    }}
  >
    <Stack.Screen name="Dictionary" component={DictionaryScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background.primary,
      },
      headerTintColor: colors.label.primary,
      headerTitleStyle: {
        fontWeight: '600',
      },
    }}
  >
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const MainApp = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'LessonsTab') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'DictionaryTab') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'ProfileTab') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.systemBlue,
      tabBarInactiveTintColor: colors.label.secondary,
      tabBarStyle: {
        backgroundColor: colors.background.primary,
        borderTopColor: colors.separator.opaque,
      },
      headerShown: false,
    })}
  >
    <Tab.Screen 
      name="HomeTab" 
      component={HomeStack}
      options={{
        title: 'Home',
      }}
    />
    <Tab.Screen 
      name="LessonsTab" 
      component={LessonsStack}
      options={{
        title: 'Lessons',
      }}
    />
    <Tab.Screen 
      name="DictionaryTab" 
      component={DictionaryStack}
      options={{
        title: 'Dictionary',
      }}
    />
    <Tab.Screen 
      name="ProfileTab" 
      component={ProfileStack}
      options={{
        title: 'Profile',
      }}
    />
  </Tab.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 