import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shadows } from '../theme';

const ProfileScreen = () => {
  const userStats = {
    streak: 7,
    totalLessons: 24,
    totalWords: 156,
    level: 'HSK 2',
  };

  const settingsOptions = [
    {
      id: '1',
      title: 'Account Settings',
      icon: 'person-outline',
    },
    {
      id: '2',
      title: 'Notification Settings',
      icon: 'notifications-outline',
    },
    {
      id: '3',
      title: 'Study Reminders',
      icon: 'alarm-outline',
    },
    {
      id: '4',
      title: 'Appearance',
      icon: 'color-palette-outline',
    },
    {
      id: '5',
      title: 'Help & Support',
      icon: 'help-circle-outline',
    },
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/profile-placeholder.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userLevel}>{userStats.level}</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userStats.streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userStats.totalLessons}</Text>
          <Text style={styles.statLabel}>Lessons</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userStats.totalWords}</Text>
          <Text style={styles.statLabel}>Words</Text>
        </View>
      </View>

      {/* Progress Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Progress</Text>
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>HSK 2 Progress</Text>
            <Text style={styles.progressPercentage}>65%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>
          <Text style={styles.progressSubtitle}>Complete 5 more lessons to reach HSK 3</Text>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {settingsOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.settingsItem}
          >
            <View style={styles.settingsItemContent}>
              <Ionicons
                name={option.icon}
                size={24}
                color={colors.label.primary}
                style={styles.settingsIcon}
              />
              <Text style={styles.settingsTitle}>{option.title}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.label.secondary}
            />
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
    paddingBottom: spacing.xl,
  },
  profileHeader: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: spacing.md,
  },
  userName: {
    fontSize: typography.fontSize.title2,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    marginBottom: spacing.xs,
  },
  userLevel: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    ...shadows.sm,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.fontSize.title2,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
  },
  statLabel: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
    marginTop: spacing.xs,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.separator.opaque,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  progressCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: spacing.md,
    ...shadows.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressTitle: {
    fontSize: typography.fontSize.headline,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
  },
  progressPercentage: {
    fontSize: typography.fontSize.subhead,
    color: colors.systemBlue,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.background.secondary,
    borderRadius: 4,
    marginBottom: spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.systemBlue,
    borderRadius: 4,
  },
  progressSubtitle: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator.opaque,
  },
  settingsItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    marginRight: spacing.md,
  },
  settingsTitle: {
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
  },
});

export default ProfileScreen; 