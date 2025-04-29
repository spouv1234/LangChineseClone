import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shadows } from '../theme';
import { useUserPreferences } from '../context/UserPreferencesContext';
import { getLanguageConfig } from '../config/languages';
import * as Speech from 'expo-speech';
import { Button, Card, List } from 'react-native-paper';

const LessonDetailScreen = ({ route, navigation }) => {
  const { lesson } = route.params;
  const { preferences } = useUserPreferences();
  const languageConfig = getLanguageConfig(preferences.language);
  const [currentSection, setCurrentSection] = useState('content');
  const [isPlaying, setIsPlaying] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    loadVoices();
  }, []);

  const loadVoices = async () => {
    try {
      const voices = await Speech.getAvailableVoicesAsync();
      const languageVoices = voices.filter(voice => 
        voice.language.startsWith(languageConfig.code)
      );
      setAvailableVoices(languageVoices);
      if (languageVoices.length > 0) {
        setSelectedVoice(languageVoices[0]);
      }
    } catch (error) {
      console.error('Error loading voices:', error);
    }
  };

  const handlePlayAudio = async (text) => {
    if (isPlaying) {
      await Speech.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      try {
        await Speech.speak(text, {
          language: languageConfig.code,
          voice: selectedVoice?.identifier,
          pitch: 1.0,
          rate: 0.8,
          onDone: () => setIsPlaying(false),
          onError: (error) => {
            console.error('Speech error:', error);
            setIsPlaying(false);
          },
        });
      } catch (error) {
        console.error('Error speaking:', error);
        setIsPlaying(false);
      }
    }
  };

  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice);
  };

  const renderContent = () => {
    return lesson.content.map((section, index) => {
      switch (section.type) {
        case 'text':
          return (
            <View key={index} style={styles.section}>
              <Text style={styles.textContent}>{section.content}</Text>
            </View>
          );
        case 'vocabulary':
          return (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>Vocabulary</Text>
              {section.items.map((item, idx) => (
                <View key={idx} style={styles.vocabularyItem}>
                  <Text style={styles.chineseText}>{item.chinese}</Text>
                  <Text style={styles.pinyinText}>{item.pinyin}</Text>
                  <Text style={styles.englishText}>{item.english}</Text>
                </View>
              ))}
            </View>
          );
        case 'dialogue':
          return (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>Dialogue</Text>
              {section.content.map((line, idx) => (
                <View key={idx} style={styles.dialogueLine}>
                  <Text style={styles.speakerText}>{line.speaker}:</Text>
                  <View style={styles.dialogueContent}>
                    <Text style={styles.chineseText}>{line.chinese}</Text>
                    <Text style={styles.pinyinText}>{line.pinyin}</Text>
                    <Text style={styles.englishText}>{line.english}</Text>
                  </View>
                </View>
              ))}
            </View>
          );
        default:
          return null;
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.label.primary} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{lesson.title}</Text>
          <View style={styles.metaInfo}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{lesson.level}</Text>
            </View>
            <Text style={styles.duration}>{lesson.duration}</Text>
          </View>
        </View>
      </View>

      {/* Content Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, currentSection === 'content' && styles.activeTab]}
          onPress={() => setCurrentSection('content')}
        >
          <Text style={[styles.tabText, currentSection === 'content' && styles.activeTabText]}>
            Content
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, currentSection === 'practice' && styles.activeTab]}
          onPress={() => setCurrentSection('practice')}
        >
          <Text style={[styles.tabText, currentSection === 'practice' && styles.activeTabText]}>
            Practice
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Card style={styles.lessonCard}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.title}>
              {lesson.title}
            </Text>
            <Text variant="bodyLarge" style={styles.description}>
              {lesson.description}
            </Text>
          </Card.Content>
        </Card>

        {/* Voice Selection */}
        {availableVoices.length > 0 && (
          <Card style={styles.voiceCard}>
            <Card.Content>
              <Text variant="titleMedium" style={styles.sectionTitle}>
                Select Voice
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {availableVoices.map((voice) => (
                  <TouchableOpacity
                    key={voice.identifier}
                    style={[
                      styles.voiceOption,
                      selectedVoice?.identifier === voice.identifier && styles.selectedVoice,
                    ]}
                    onPress={() => handleVoiceSelect(voice)}
                  >
                    <Text
                      style={[
                        styles.voiceText,
                        selectedVoice?.identifier === voice.identifier && styles.selectedVoiceText,
                      ]}
                    >
                      {voice.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Card.Content>
          </Card>
        )}

        <View style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => handlePlayAudio(lesson.title)}
            icon={isPlaying ? 'stop' : 'play'}
            style={styles.playButton}
          >
            {isPlaying ? 'Stop' : 'Play'} Pronunciation
          </Button>
        </View>

        {currentSection === 'content' ? (
          renderContent()
        ) : (
          <View style={styles.practiceSection}>
            <Text style={styles.practiceTitle}>Practice Exercises</Text>
            <Text style={styles.practiceText}>Practice exercises will be available soon!</Text>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Practice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator.opaque,
  },
  backButton: {
    marginRight: spacing.md,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.title2,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    marginBottom: spacing.xs,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelBadge: {
    backgroundColor: colors.systemBlue,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 6,
    marginRight: spacing.sm,
  },
  levelText: {
    color: colors.background.primary,
    fontSize: typography.fontSize.caption1,
    fontWeight: typography.fontWeight.medium,
  },
  duration: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.separator.opaque,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.systemBlue,
  },
  tabText: {
    fontSize: typography.fontSize.body,
    color: colors.label.secondary,
  },
  activeTabText: {
    color: colors.systemBlue,
    fontWeight: typography.fontWeight.semibold,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.headline,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  textContent: {
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
    lineHeight: typography.lineHeight.body,
  },
  vocabularyItem: {
    marginBottom: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.background.secondary,
    borderRadius: 8,
  },
  chineseText: {
    fontSize: typography.fontSize.title3,
    color: colors.label.primary,
    marginBottom: spacing.xs,
  },
  pinyinText: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
    marginBottom: spacing.xs,
  },
  englishText: {
    fontSize: typography.fontSize.body,
    color: colors.label.secondary,
  },
  dialogueLine: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  speakerText: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    marginRight: spacing.sm,
  },
  dialogueContent: {
    flex: 1,
  },
  practiceSection: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  practiceTitle: {
    fontSize: typography.fontSize.title2,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  practiceText: {
    fontSize: typography.fontSize.body,
    color: colors.label.secondary,
    textAlign: 'center',
  },
  footer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.separator.opaque,
  },
  startButton: {
    backgroundColor: colors.systemBlue,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButtonText: {
    color: colors.background.primary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.semibold,
  },
  lessonCard: {
    marginBottom: 16,
  },
  description: {
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  playButton: {
    minWidth: 200,
  },
  contentCard: {
    marginBottom: 16,
  },
  voiceCard: {
    marginBottom: 16,
  },
  voiceOption: {
    padding: 8,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  selectedVoice: {
    backgroundColor: '#007AFF',
  },
  voiceText: {
    color: '#000',
  },
  selectedVoiceText: {
    color: '#fff',
  },
});

export default LessonDetailScreen; 