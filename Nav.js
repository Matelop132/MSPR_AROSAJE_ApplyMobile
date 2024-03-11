// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YourListings from './screens/YourListings';
import AllPlants from './screens/AllPlants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Vos annonces" component={YourListings} options={{ title: 'Vos Annonces' }} />
        <Stack.Screen name="Les Plantes" component={AllPlants} options={{ title: 'Les Plantes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
