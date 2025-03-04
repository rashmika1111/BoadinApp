// screens/BoardingDashboard.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton, Menu, Divider, Provider } from 'react-native-paper';

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

const BoarderDashboard = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [boardingType, setBoardingType] = useState('rooms');
  const [district, setDistrict] = useState('');
  const [number, setNumber] = useState(null);
  const [showDistrictMenu, setShowDistrictMenu] = useState(false);

  const handleSubmit = () => {
    if (!location || !price || !district) {
      alert('Please fill all fields');
      return;
    }

    if (boardingType === 'rooms') {
      navigation.navigate('Room', { location, price, district,number});
    } else if (boardingType === 'house') {
      navigation.navigate('House', { location, price, district,number});
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>Boarding Dashboard</Text>

        {/* District Filter */}
        <Menu
          visible={showDistrictMenu}
          onDismiss={() => setShowDistrictMenu(false)}
          anchor={
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDistrictMenu(true)}
            >
              <Text>{district || 'Select District'}</Text>
            </TouchableOpacity>
          }
        >
          {districts.map((dist, index) => (
            <React.Fragment key={index}>
              <Menu.Item
                onPress={() => {
                  setDistrict(dist);
                  setShowDistrictMenu(false);
                }}
                title={dist}
              />
              {index < districts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Menu>

        {/* Location Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={location}
          onChangeText={setLocation}
        />

         <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={number}
          onChangeText={setNumber}
        />

        {/* Price Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        {/* Boarding Type Selection */}
        <View style={styles.radioGroup}>
          <Text style={styles.label}>Select Boarding Type:</Text>
          <View style={styles.radioButton}>
            <RadioButton
              value="rooms"
              status={boardingType === 'rooms' ? 'checked' : 'unchecked'}
              onPress={() => setBoardingType('rooms')}
            />
            <Text style={styles.radioLabel}>Rooms</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton
              value="house"
              status={boardingType === 'house' ? 'checked' : 'unchecked'}
              onPress={() => setBoardingType('house')}
            />
            <Text style={styles.radioLabel}>House</Text>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Provider>
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
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  radioGroup: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 8,
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

export default BoarderDashboard;