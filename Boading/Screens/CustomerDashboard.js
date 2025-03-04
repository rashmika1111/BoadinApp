// screens/CustomerDashboard.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import placeDB from '../db/placeDB';

const districts = [
  'Colombo',
  'Gampaha',
  'Kalutara',
  'Kandy',
  'Matale',
  'Nuwara Eliya',
  'Galle',
  'Matara',
  'Hambantota',
  'Jaffna',
  'Kilinochchi',
  'Mannar',
  'Vavuniya',
  'Mullaitivu',
  'Batticaloa',
  'Ampara',
  'Trincomalee',
  'Kurunegala',
  'Puttalam',
  'Anuradhapura',
  'Polonnaruwa',
  'Badulla',
  'Monaragala',
  'Ratnapura',
  'Kegalle',
];

const CustomerDashboard = ({ navigation }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('default');
  const [searchArea, setSearchArea] = useState('');
  const [selectedType, setSelectedType] = useState('default');

  const handleSubmit = () => {
    if (selectedType === 'default') {
      Alert.alert('Error', 'Please select a type (House or Room)');
      return;
    }

    // Filter data based on selected district, search area, and type
    const filteredData = placeDB.filter((place) => {
      const matchesDistrict =
        selectedDistrict === 'default' || place.district === selectedDistrict;
      const matchesArea =
        !searchArea || place.location.toLowerCase().includes(searchArea.toLowerCase());
      const matchesType = place.type === selectedType;
      return matchesDistrict && matchesArea && matchesType;
    });

    if (filteredData.length === 0) {
      Alert.alert('No Results', 'No matching places found.');
      return;
    }

    // Navigate to the appropriate screen with filtered data
    if (selectedType === 'house') {
      navigation.navigate('CustomerHouse', { filteredData });
    } else if (selectedType === 'room') {
      navigation.navigate('CustomerRoom', { filteredData });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Dashboard</Text>

      {/* District Filter */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Select District:</Text>
        <Picker
          selectedValue={selectedDistrict}
          onValueChange={(itemValue) => setSelectedDistrict(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select District" value="default" />
          {districts.map((district, index) => (
            <Picker.Item key={index} label={district} value={district} />
          ))}
        </Picker>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.input}
        placeholder="Search for an area..."
        value={searchArea}
        onChangeText={setSearchArea}
      />

      {/* House or Room Filter */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Select Type:</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Type" value="default" />
          <Picker.Item label="House" value="house" />
          <Picker.Item label="Room" value="room" />
        </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
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

export default CustomerDashboard;