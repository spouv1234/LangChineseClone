import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors, typography, spacing, shadows } from '../theme';

const HomeScreen = ({ navigation }) => {
  const featuredLessons = [
    {
      id: '1',
      title: 'Beginner Chinese',
      description: 'Start your Chinese learning journey',
      image: require('../../assets/images/beginner-lesson.jpg'),
      level: 'Beginner',
    },
    {
      id: '2',
      title: 'Daily Conversations',
      description: 'Essential phrases for everyday life',
      image: require('../../assets/images/conversation-lesson.jpg'),
      level: 'Intermediate',
    },
  ];

  const recentLessons = [
    {
      id: '3',
      title: 'Business Chinese',
      progress: 75,
    },
    {
      id: '4',
      title: 'Travel Phrases',
      progress: 30,
    },
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.subtitle}>Continue your learning journey</Text>
      </View>

      {/* Featured Lessons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Lessons</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContainer}
        >
          {featuredLessons.map((lesson) => (
            <TouchableOpacity
              key={lesson.id}
              style={styles.featuredCard}
              onPress={() => navigation.navigate('LessonDetail', { lessonId: lesson.id })}
            >
              <Image source={lesson.image} style={styles.featuredImage} />
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>{lesson.title}</Text>
                <Text style={styles.featuredDescription}>{lesson.description}</Text>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>{lesson.level}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recent Lessons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        {recentLessons.map((lesson) => (
          <TouchableOpacity
            key={lesson.id}
            style={styles.recentCard}
            onPress={() => navigation.navigate('LessonDetail', { lessonId: lesson.id })}
          >
            <View style={styles.recentContent}>
              <Text style={styles.recentTitle}>{lesson.title}</Text>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill,
                    { width: `${lesson.progress}%` }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>{lesson.progress}% complete</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  contentContainer: {
    padding: spacing.screenPadding,
  },
  welcomeSection: {
    marginBottom: spacing.lg,
  },
  welcomeText: {
    fontSize: typography.fontSize.title1,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.body,
    color: colors.label.secondary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  featuredContainer: {
    paddingRight: spacing.screenPadding,
  },
  featuredCard: {
    width: 280,
    marginRight: spacing.md,
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    ...shadows.md,
  },
  featuredImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  featuredContent: {
    padding: spacing.md,
  },
  featuredTitle: {
    fontSize: typography.fontSize.headline,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
    marginBottom: spacing.xs,
  },
  featuredDescription: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
    marginBottom: spacing.sm,
  },
  levelBadge: {
    backgroundColor: colors.systemBlue,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  levelText: {
    color: colors.background.primary,
    fontSize: typography.fontSize.caption1,
    fontWeight: typography.fontWeight.medium,
  },
  recentCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  recentContent: {
    flex: 1,
  },
  recentTitle: {
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    color: colors.label.primary,
    marginBottom: spacing.sm,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.background.secondary,
    borderRadius: 2,
    marginBottom: spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.systemBlue,
    borderRadius: 2,
  },
  progressText: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
  },
});

export default HomeScreen; 