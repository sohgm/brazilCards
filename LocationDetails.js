import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const LocationDetails = ({ route }) => {
  const { location } = route.params;

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{location.title}</Text>
        <Text>{location.description}</Text>
      </View>
    </ScrollView>
  );
};

export default LocationDetails;
