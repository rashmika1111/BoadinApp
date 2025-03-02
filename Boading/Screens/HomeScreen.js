// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/boarding-background.jpg')} // Add your image path here
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Boarding App</Text>
        <Text style={styles.subtitle}>Find the best boarding services near you</Text>

        {/* Boarding Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BoarderLogin')}
        >
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.buttonText}>Boarding</Text>
        </TouchableOpacity>

        {/* Customer Guide Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CustomerLogin')}
        >
          <Ionicons name="people" size={24} color="#fff" />
          <Text style={styles.buttonText}>Customer Guide</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Green color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});

export default HomeScreen;