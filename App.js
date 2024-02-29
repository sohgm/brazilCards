import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrazilCards from './BrasilCards'; 
import LocationDetails from './LocationDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BrazilCards" component={BrazilCards} options={{ title: 'Brazil Cards' }} />
        <Stack.Screen name="LocationDetails" component={LocationDetails} options={{ title: 'Location Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
