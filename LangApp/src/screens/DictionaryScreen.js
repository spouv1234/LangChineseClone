import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shadows } from '../theme';

const DictionaryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    { id: '1', character: '你好', pinyin: 'nǐ hǎo', meaning: 'Hello' },
    { id: '2', character: '谢谢', pinyin: 'xiè xiè', meaning: 'Thank you' },
  ]);

  const searchResults = [
    {
      id: '1',
      character: '学习',
      pinyin: 'xué xí',
      meaning: 'to study, to learn',
      examples: [
        { chinese: '我学习中文', pinyin: 'wǒ xué xí zhōng wén', english: 'I study Chinese' },
      ],
    },
    {
      id: '2',
      character: '老师',
      pinyin: 'lǎo shī',
      meaning: 'teacher',
      examples: [
        { chinese: '我的老师很好', pinyin: 'wǒ de lǎo shī hěn hǎo', english: 'My teacher is very good' },
      ],
    },
  ];

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity
      style={styles.resultCard}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.resultHeader}>
        <Text style={styles.character}>{item.character}</Text>
        <Text style={styles.pinyin}>{item.pinyin}</Text>
      </View>
      <Text style={styles.meaning}>{item.meaning}</Text>
      <View style={styles.examplesContainer}>
        {item.examples.map((example, index) => (
          <View key={index} style={styles.example}>
            <Text style={styles.exampleChinese}>{example.chinese}</Text>
            <Text style={styles.examplePinyin}>{example.pinyin}</Text>
            <Text style={styles.exampleEnglish}>{example.english}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  const renderRecentSearch = ({ item }) => (
    <TouchableOpacity
      style={styles.recentSearchItem}
      onPress={() => setSearchQuery(item.character)}
    >
      <View style={styles.recentSearchContent}>
        <Text style={styles.recentCharacter}>{item.character}</Text>
        <Text style={styles.recentPinyin}>{item.pinyin}</Text>
      </View>
      <Text style={styles.recentMeaning}>{item.meaning}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.label.secondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Chinese characters..."
          placeholderTextColor={colors.label.secondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color={colors.label.secondary} />
          </TouchableOpacity>
        )}
      </View>

      {/* Recent Searches */}
      {searchQuery.length === 0 && (
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <FlatList
            data={recentSearches}
            renderItem={renderRecentSearch}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.recentSearchesList}
          />
        </View>
      )}

      {/* Search Results */}
      {searchQuery.length > 0 && (
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.resultsContainer}
        />
      )}
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
  recentSearchesContainer: {
    flex: 1,
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.title3,
    fontWeight: typography.fontWeight.semibold,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  recentSearchesList: {
    paddingBottom: spacing.md,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator.opaque,
  },
  recentSearchContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentCharacter: {
    fontSize: typography.fontSize.headline,
    color: colors.label.primary,
    marginRight: spacing.sm,
  },
  recentPinyin: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
  },
  recentMeaning: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
  },
  resultsContainer: {
    padding: spacing.md,
  },
  resultCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  character: {
    fontSize: typography.fontSize.title2,
    fontWeight: typography.fontWeight.bold,
    color: colors.label.primary,
    marginRight: spacing.sm,
  },
  pinyin: {
    fontSize: typography.fontSize.subhead,
    color: colors.label.secondary,
  },
  meaning: {
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
    marginBottom: spacing.md,
  },
  examplesContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.separator.opaque,
    paddingTop: spacing.md,
  },
  example: {
    marginBottom: spacing.sm,
  },
  exampleChinese: {
    fontSize: typography.fontSize.body,
    color: colors.label.primary,
  },
  examplePinyin: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
  },
  exampleEnglish: {
    fontSize: typography.fontSize.caption1,
    color: colors.label.secondary,
    fontStyle: 'italic',
  },
});

export default DictionaryScreen; 