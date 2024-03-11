import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function EcologyPage() {
  const handlePress = () => {
    // Action à effectuer lors du clic sur le bouton
    navigation.navigate('Accueil');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Protégeons notre planète</Text>
        <Image
          source={require('./assets/background.jpg')} // Chemin vers votre image
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.paragraph}>
          L'écologie est l'étude des relations entre les organismes vivants et leur environnement.
          C'est notre responsabilité de préserver notre planète pour les générations futures.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Agir maintenant</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 - Tous droits réservés</Text>
      </View>
    </View>
  );
}

const Accueil = () => {
  return
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2E9', // Couleur de fond verte claire
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#388E3C', // Couleur de fond verte foncée
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 'auto', // Pour centrer le texte au milieu
  },
  headerImage: {
    width: 50, // Ajustez la taille de l'image selon vos besoins
    height: 50, // Ajustez la taille de l'image selon vos besoins
  },
  main: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#388E3C', // Couleur de texte verte foncée
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#388E3C',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#388E3C', // Couleur de fond verte foncée
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
});
