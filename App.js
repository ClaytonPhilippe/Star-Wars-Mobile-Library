import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Films } from './src/screens/Films';
import { People } from './src/screens/People';
import { Planets } from './src/screens/Planets';
import { Spaceships } from './src/screens/Spaceships';
import { Species } from './src/screens/Species';
import { Vehicles } from './src/screens/Vehicles';
import { Character01 } from './src/screens/Characters/Character01';
import { Character02 } from './src/screens/Characters/Character02';
import { Character03 } from './src/screens/Characters/Character03';
import Buttonlayout from './src/components/buttonlayout';

function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'PressStart2P-Regular': require('./src/assets/fonts/PressStart2P-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Wars</Text>
      <Text style={styles.caption}>Library</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Films')}
        style={styles.menu}>

        <Text style={styles.text}>Films</Text>

      </TouchableOpacity>

  
      <TouchableOpacity
        onPress={() => navigation.navigate('People')}
        style={styles.menu}>
        <Text style={styles.text}>People</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Planets')}
        style={styles.menu}>
        <Text style={styles.text}>Planets</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Spaceships')}
        style={styles.menu}>
        <Text style={styles.text}>Spaceships</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Species')}
        style={styles.menu}>
        <Text style={styles.text}>Species</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Vehicles')}
        style={styles.menu}>
        <Text style={styles.text}>Vehicles</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>swapi.dev</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="Planets" component={Planets} />
        <Stack.Screen name="Spaceships" component={Spaceships} />
        <Stack.Screen name="Species" component={Species} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Character01" component={Character01} />
        <Stack.Screen name="Character02" component={Character02} />
        <Stack.Screen name="Character03" component={Character03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'PressStart2P-Regular',
  },
  caption: {
    position: 'absolute',
    top: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'PressStart2P-Regular',
  },
  text: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    fontFamily: 'PressStart2P-Regular',
    top: '10%',
  },
  footer: {
    color: 'white',
    fontSize: 10,
    padding: 100,
    fontFamily: 'PressStart2P-Regular',
    top: '20%',
  },
  menu: {
    //borderWidth: 3,
    borderColor: 'white',
    borderTop: 10,
    margin: 10,
    top: '20%',
  },
  img: {
    position: 'absolute',
    width: 160,
    height: 160,
    top: '40%',
  },
});
