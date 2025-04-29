import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { useUserPreferences } from '../context/UserPreferencesContext';
import * as Speech from 'expo-speech';

const VoiceSelectionScreen = ({ navigation }) => {
  const { preferences, updatePreferences } = useUserPreferences();
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(preferences.voice);

  useEffect(() => {
    loadVoices();
  }, []);

  const loadVoices = async () => {
    const availableVoices = await Speech.getAvailableVoicesAsync();
    setVoices(availableVoices);
  };

  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice);
    updatePreferences({ voice });
    Speech.speak('Hello, this is a test of the selected voice.', { voice });
  };

  const renderVoiceItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleVoiceSelect(item)}>
      <Card style={[styles.voiceCard, selectedVoice?.identifier === item.identifier && styles.selectedVoice]}>
        <Card.Content>
          <Text variant="titleMedium">{item.name}</Text>
          <Text variant="bodyMedium">{item.language}</Text>
          <Text variant="bodySmall">{item.quality}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Select Your Voice</Text>
      <FlatList
        data={voices}
        renderItem={renderVoiceItem}
        keyExtractor={(item) => item.identifier}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Confirm Selection
      </Button>
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
  voiceCard: {
    marginVertical: 8,
  },
  selectedVoice: {
    backgroundColor: '#e3f2fd',
  },
  button: {
    marginTop: 16,
  },
});

export default VoiceSelectionScreen; 