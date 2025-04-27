import React from 'react';
import { 
  View, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { 
  Text, 
  Avatar, 
  List, 
  Divider
} from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    level: 'HSK 2',
    streak: 7,
    totalLessons: 24,
  };

  const menuItems = [
    { icon: 'book', title: 'My Learning Stats', screen: 'Stats' },
    { icon: 'star', title: 'Achievements', screen: 'Achievements' },
    { icon: 'settings', title: 'Settings', screen: 'Settings' },
    { icon: 'help-circle', title: 'Help & Support', screen: 'Help' },
    { icon: 'information', title: 'About', screen: 'About' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text 
          size={80} 
          label={userData.name.split(' ').map(n => n[0]).join('')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.email}>{userData.email}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData.streak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData.totalLessons}</Text>
            <Text style={styles.statLabel}>Lessons</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData.level}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <List.Item
              title={item.title}
              left={props => <List.Icon {...props} icon={item.icon} />}
              onPress={() => navigation.navigate(item.screen)}
            />
            {index < menuItems.length - 1 && <Divider />}
          </React.Fragment>
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
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  avatar: {
    backgroundColor: '#FF4B4B',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 16,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4B4B',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#eee',
  },
  menuSection: {
    marginTop: 16,
    backgroundColor: '#fff',
  }
});

export default ProfileScreen; 