import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGroups } from './GroupContext';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { groups } = useGroups();

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.appTitle}>Mindmerge App</Text>
      </View>
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
  titleBox: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',  // Changed color to white
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
