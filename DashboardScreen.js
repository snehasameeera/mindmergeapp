import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGroups } from './GroupContext';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { groups } = useGroups();

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Mindmerge App</Text>
      <Text style={styles.title}>Dashboard</Text>
      <Button
        title="Create New Group"
        onPress={() => navigation.navigate('CreateGroup')}
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.groupItem}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lavender',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,  // Moved down to bring it a few inches down
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  groupItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DashboardScreen;
