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
  ProgressBar, 
  useTheme 
} from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  const featuredLessons = [
    {
      id: 1,
      title: 'Beginner Story 1',
      level: 'HSK 1',
      progress: 0.6,
    },
    {
      id: 2,
      title: 'Daily Life',
      level: 'HSK 2',
      progress: 0.3,
    },
    {
      id: 3,
      title: 'Chinese Culture',
      level: 'HSK 3',
      progress: 0.1,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back!</Text>
        <Text style={styles.subtitle}>Continue your learning journey</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <Card style={styles.progressCard}>
          <Card.Content>
            <Text style={styles.progressTitle}>Overall Progress</Text>
            <ProgressBar 
              progress={0.45} 
              color={theme.colors.primary}
              style={styles.progressBar}
            />
            <Text style={styles.progressText}>45% Complete</Text>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Lessons</Text>
        {featuredLessons.map((lesson) => (
          <TouchableOpacity
            key={lesson.id}
            onPress={() => navigation.navigate('Reading', { lessonId: lesson.id })}
          >
            <Card style={styles.lessonCard}>
              <Card.Content>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonLevel}>{lesson.level}</Text>
                <ProgressBar 
                  progress={lesson.progress} 
                  color={theme.colors.primary}
                  style={styles.lessonProgress}
                />
                <Text style={styles.lessonProgressText}>
                  {Math.round(lesson.progress * 100)}% Complete
                </Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressCard: {
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressText: {
    textAlign: 'right',
    color: '#666',
  },
  lessonCard: {
    marginBottom: 16,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  lessonLevel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  lessonProgress: {
    height: 6,
    borderRadius: 3,
    marginBottom: 4,
  },
  lessonProgressText: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen; 