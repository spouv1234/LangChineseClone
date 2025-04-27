import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { 
  Text, 
  IconButton, 
  useTheme,
  Divider
} from 'react-native-paper';
import pinyin from 'pinyin';

const ReadingScreen = ({ route, navigation }) => {
  const theme = useTheme();
  const [showTranslation, setShowTranslation] = useState(false);
  const [showPinyin, setShowPinyin] = useState(true);

  // Sample lesson content
  const lessonContent = {
    title: 'Beginner Story 1',
    content: [
      {
        chinese: '你好，我叫小明。',
        pinyin: 'Nǐ hǎo, wǒ jiào Xiǎo Míng.',
        translation: 'Hello, my name is Xiao Ming.'
      },
      {
        chinese: '我是学生。',
        pinyin: 'Wǒ shì xuéshēng.',
        translation: 'I am a student.'
      },
      {
        chinese: '我喜欢学习中文。',
        pinyin: 'Wǒ xǐhuān xuéxí Zhōngwén.',
        translation: 'I like learning Chinese.'
      }
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>{lessonContent.title}</Text>
        <View style={styles.controls}>
          <IconButton
            icon={showPinyin ? "format-text" : "format-text"}
            size={24}
            onPress={() => setShowPinyin(!showPinyin)}
          />
          <IconButton
            icon={showTranslation ? "eye" : "eye-off"}
            size={24}
            onPress={() => setShowTranslation(!showTranslation)}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {lessonContent.content.map((paragraph, index) => (
          <View key={index} style={styles.paragraph}>
            <Text style={styles.chineseText}>{paragraph.chinese}</Text>
            {showPinyin && (
              <Text style={styles.pinyinText}>{paragraph.pinyin}</Text>
            )}
            {showTranslation && (
              <Text style={styles.translationText}>{paragraph.translation}</Text>
            )}
            <Divider style={styles.divider} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {/* TODO: Implement next lesson */}}
        >
          <Text style={styles.buttonText}>Next Lesson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  controls: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  paragraph: {
    marginBottom: 24,
  },
  chineseText: {
    fontSize: 24,
    marginBottom: 8,
  },
  pinyinText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  translationText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  divider: {
    marginTop: 16,
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  button: {
    backgroundColor: '#FF4B4B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReadingScreen; 