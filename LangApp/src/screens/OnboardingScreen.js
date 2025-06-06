import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors, typography, spacing, shadows } from '../theme';
import { useUserPreferences } from '../context/UserPreferencesContext';
import { languages } from '../config/languages';

const OnboardingScreen = ({ navigation }) => {
  const { updatePreferences } = useUserPreferences();
  const [name, setName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const voices = ['Male', 'Female'];

  const handleComplete = () => {
    updatePreferences({
      name,
      language: selectedLanguage,
      level: selectedLevel,
      voice: selectedVoice,
    });
    navigation.replace('MainApp');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to LangApp</Text>
        <Text style={styles.subtitle}>Let's personalize your learning experience</Text>

        {/* Name Input */}
        <View style={styles.section}>
          <Text style={styles.label}>What's your name?</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor={colors.label.secondary}
          />
        </View>

        {/* Language Selection */}
        <View style={styles.section}>
          <Text style={styles.label}>Which language do you want to learn?</Text>
          <View style={styles.optionsContainer}>
            {Object.entries(languages).map(([key, lang]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.option,
                  selectedLanguage === key && styles.selectedOption,
                ]}
                onPress={() => setSelectedLanguage(key)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedLanguage === key && styles.selectedOptionText,
                  ]}
                >
                  {lang.flag} {lang.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Skill Level Selection */}
        <View style={styles.section}>
          <Text style={styles.label}>What's your current skill level?</Text>
          <View style={styles.optionsContainer}>
            {levels.map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.option,
                  selectedLevel === level && styles.selectedOption,
                ]}
                onPress={() => setSelectedLevel(level)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedLevel === level && styles.selectedOptionText,
                  ]}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Voice Gender Selection */}
        <View style={styles.section}>
          <Text style={styles.label}>Preferred voice for pronunciation?</Text>
          <View style={styles.optionsContainer}>
            {voices.map((voice) => (
              <TouchableOpacity
                key={voice}
                style={[
                  styles.option,
                  selectedVoice === voice && styles.selectedOption,
                ]}
                onPress={() => setSelectedVoice(voice)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedVoice === voice && styles.selectedOptionText,
                  ]}
                >
                  {voice}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Complete Button */}
        <TouchableOpacity
          style={[
            styles.button,
            (!name || !selectedLanguage || !selectedLevel || !selectedVoice) && styles.buttonDisabled,
          ]}
          onPress={handleComplete}
          disabled={!name || !selectedLanguage || !selectedLevel || !selectedVoice}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    padding: spacing.screenPadding,
  },
  title: {
    fontSize: typography.fontSize.title1,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.body,
    color: colors.label.secondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.xl,
  },
  label: {
    fontSize: typography.fontSize.headline,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  input: {
    backgroundColor: colors.background.secondary,
    borderRadius: 8,
    padding: spacing.md,
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
    ...shadows.sm,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  option: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 8,
    ...shadows.sm,
  },
  selectedOption: {
    backgroundColor: colors.systemBlue,
  },
  optionText: {
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
  },
  selectedOptionText: {
    color: colors.background.primary,
    fontWeight: typography.fontWeight.semibold,
  },
  button: {
    backgroundColor: colors.systemBlue,
    padding: spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.xl,
    ...shadows.md,
  },
  buttonDisabled: {
    backgroundColor: colors.label.tertiary,
  },
  buttonText: {
    color: colors.background.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.semibold,
  },
});

export default OnboardingScreen; 