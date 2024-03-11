// screens/HomePage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contenu de la page d'accueil</Text>
      <Button
        title="Aller à l'autre page"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}
