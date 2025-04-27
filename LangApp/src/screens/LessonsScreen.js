import React from 'react';
import { 
  View, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { 
  Text, 
  Card, 
  Chip,
  useTheme
} from 'react-native-paper';

const LessonsScreen = ({ navigation }) => {
  const theme = useTheme();

  const lessonsByLevel = [
    {
      level: 'HSK 1',
      lessons: [
        { id: 1, title: 'Greetings', progress: 0.8 },
        { id: 2, title: 'Numbers', progress: 0.6 },
        { id: 3, title: 'Family', progress: 0.4 },
      ]
    },
    {
      level: 'HSK 2',
      lessons: [
        { id: 4, title: 'Daily Routine', progress: 0.3 },
        { id: 5, title: 'Shopping', progress: 0.2 },
        { id: 6, title: 'Weather', progress: 0.1 },
      ]
    },
    {
      level: 'HSK 3',
      lessons: [
        { id: 7, title: 'Travel', progress: 0 },
        { id: 8, title: 'Food', progress: 0 },
        { id: 9, title: 'Hobbies', progress: 0 },
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {lessonsByLevel.map((levelGroup) => (
        <View key={levelGroup.level} style={styles.levelSection}>
          <View style={styles.levelHeader}>
            <Text style={styles.levelTitle}>{levelGroup.level}</Text>
            <Chip
              style={styles.levelChip}
              textStyle={styles.levelChipText}
            >
              {levelGroup.lessons.length} Lessons
            </Chip>
          </View>

          {levelGroup.lessons.map((lesson) => (
            <TouchableOpacity
              key={lesson.id}
              onPress={() => navigation.navigate('Reading', { lessonId: lesson.id })}
            >
              <Card style={styles.lessonCard}>
                <Card.Content>
                  <View style={styles.lessonHeader}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.progressText}>
                      {Math.round(lesson.progress * 100)}%
                    </Text>
                  </View>
                  <View style={styles.progressContainer}>
                    <View 
                      style={[
                        styles.progressBar,
                        { 
                          width: `${lesson.progress * 100}%`,
                          backgroundColor: theme.colors.primary
                        }
                      ]} 
                    />
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  levelSection: {
    padding: 16,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
  },
  levelChip: {
    backgroundColor: '#FF4B4B',
  },
  levelChipText: {
    color: '#fff',
  },
  lessonCard: {
    marginBottom: 12,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 2,
  },
});

export default LessonsScreen; 