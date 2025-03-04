// screens/House.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const House = ({ route }) => {
  const { location, price, district, number } = route.params;
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Cancelled', 'Photo selection was cancelled');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const newPhoto = response.assets[0].uri;
        setPhotos([...photos, newPhoto]);
      } else {
        Alert.alert('Error', 'No photo selected');
      }
    });
  };

  const handleSubmit = async () => {
    try {
      // Prepare the data to send to the backend
      const listingData = {
        location,
        district,
        price,
        number,
        photos, // Array of photo URIs
      };

      // Send a POST request to the backend API
      const response = await fetch('https://your-backend-api.com/save-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listingData),
      });

      // Handle the response
      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Listing submitted successfully!');
      } else {
        Alert.alert('Error', result.message || 'Failed to submit listing.');
      }
    } catch (error) {
      console.error('Error submitting listing:', error);
      Alert.alert('Error', 'An error occurred while submitting the listing.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>House</Text>
      <Text style={styles.detail}>Location: {location}</Text>
      <Text style={styles.detail}>District: {district}</Text>
      <Text style={styles.detail}>Number: {number}</Text>
      <Text style={styles.detail}>Price: {price}</Text>

      {/* Display Photos */}
      <View style={styles.photosContainer}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </View>

      {/* Add Photo Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddPhoto}>
        <Text style={styles.buttonText}>Add Photo</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default House;