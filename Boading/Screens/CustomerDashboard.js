// screens/CustomerDashboard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Dashboard</Text>
      <Text>Welcome, Customer! Here are your guide details.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CustomerDashboard;