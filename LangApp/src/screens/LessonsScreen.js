import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useUserPreferences } from '../context/UserPreferencesContext';
import { getLanguageConfig } from '../config/languages';

const LessonsScreen = ({ navigation }) => {
  const { preferences } = useUserPreferences();
  const languageConfig = getLanguageConfig(preferences.language);

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('LessonDetail', { lesson: item })}>
      <Card style={styles.lessonCard}>
        <Card.Content>
          <Text variant="titleMedium">{item.title}</Text>
          <Text variant="bodyMedium">{item.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {languageConfig.name} Lessons
      </Text>
      <FlatList
        data={languageConfig.lessons[preferences.level.toLowerCase()]}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  lessonCard: {
    marginVertical: 8,
  },
});

export default LessonsScreen; 