import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function People({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.icon}>
        <Text
          style={{
            position: 'absolute',
            color: 'white',
            fontSize: 30,
            fontFamily: 'PressStart2P-Regular',
            top: 70,
            right: -15
            
          }}>
          &lt;
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Character01')}>
        <Text style={styles.text}>Luke Skywalker</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Character02')}>
        <Text style={styles.text}>C-3PO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Character03')}>
        <Text style={styles.text}>R2-D2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 17,
    padding: 10,
    fontFamily: 'PressStart2P-Regular',
  },
  icon: {
    bottom: '40%',
    right: '40%',
  },
});
