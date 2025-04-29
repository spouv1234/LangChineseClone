import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SectionList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shadows } from '../theme';

const LessonsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const lessonsData = [
    {
      title: 'Beginner (HSK 1)',
      data: [
        {
          id: '1',
          title: 'Greetings and Introductions',
          description: 'Learn basic greetings and self-introduction',
          level: 'HSK 1',
          duration: '15 min',
          completed: true,
        },
        {
          id: '2',
          title: 'Numbers and Time',
          description: 'Master numbers and telling time',
          level: 'HSK 1',
          duration: '20 min',
          completed: false,
        },
      ],
    },
    {
      title: 'Elementary (HSK 2)',
      data: [
        {
          id: '3',
          title: 'Daily Activities',
          description: 'Talk about your daily routine',
          level: 'HSK 2',
          duration: '25 min',
          completed: false,
        },
        {
          id: '4',
          title: 'Shopping',
          description: 'Learn shopping vocabulary and phrases',
          level: 'HSK 2',
          duration: '30 min',
          completed: false,
        },
      ],
    },
  ];

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonCard}
      onPress={() => navigation.navigate('LessonDetail', { lessonId: item.id })}
    >
      <View style={styles.lessonContent}>
        <View style={styles.lessonHeader}>
          <Text style={styles.lessonTitle}>{item.title}</Text>
          {item.completed && (
            <Ionicons name="checkmark-circle" size={20} color={colors.systemGreen} />
          )}
        </View>
        <Text style={styles.lessonDescription}>{item.description}</Text>
        <View style={styles.lessonFooter}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{item.level}</Text>
          </View>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.label.secondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search lessons..."
          placeholderTextColor={colors.label.secondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Lessons List */}
      <SectionList
        sections={lessonsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    margin: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 10,
    ...shadows.sm,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
  },
  listContent: {
    padding: spacing.md,
  },
  sectionHeader: {
    paddingVertical: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
  },
  lessonCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  lessonContent: {
    padding: spacing.md,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  lessonTitle: {
    fontSize: typography.fontSize.headline,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
  },
  lessonDescription: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
    marginBottom: spacing.sm,
  },
  lessonFooter: {
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
  durationText: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
  },
});

export default LessonsScreen; 