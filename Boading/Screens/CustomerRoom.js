// screens/CustomerRoom.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerRoom = ({ route }) => {
  const { district, area } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Listings</Text>
      <Text style={styles.detail}>District: {district}</Text>
      <Text style={styles.detail}>Area: {area}</Text>
      <Text style={styles.description}>
        Here are the room listings based on your filters.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default CustomerRoom;