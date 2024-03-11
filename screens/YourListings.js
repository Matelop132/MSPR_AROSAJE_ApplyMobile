// screens/OtherPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OtherPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contenu de l'autre page</Text>
      <Button
        title="Retour à l'accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}
