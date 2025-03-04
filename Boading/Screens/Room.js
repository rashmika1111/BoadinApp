// screens/Room.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const Room = ({ route }) => {
  const { location, price, district, number } = route.params;
  const [photos, setPhotos] = useState([]);
  const [selectedPersons, setSelectedPersons] = useState('default'); // Default filter

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rooms</Text>
      <Text style={styles.detail}>Location: {location}</Text>
      <Text style={styles.detail}>District: {district}</Text>
      <Text style={styles.detail}>Number: {number}</Text>
      <Text style={styles.detail}>Price: {price}</Text>

      {/* Filter by Number of Persons */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Number of Persons:</Text>
        <Picker
          selectedValue={selectedPersons}
          onValueChange={(itemValue) => setSelectedPersons(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Default" value="default" />
          <Picker.Item label="1 Person" value="1" />
          <Picker.Item label="2 Persons" value="2" />
          <Picker.Item label="4 Persons" value="4" />
        </Picker>
      </View>

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
  filterContainer: {
    width: '80%',
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Room;