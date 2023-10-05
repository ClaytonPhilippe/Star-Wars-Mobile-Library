import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export function Character02() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);


  const handlePress = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/2');
      const json = await response.json();
      setData(json);

      //films-Promise 
      const filmsResponses = await Promise.all(json.films.map((filmUrl) => fetch(filmUrl)));
      const filmsJson = await Promise.all(filmsResponses.map((filmsResponses) => filmsResponses.json()));
      setFilms([filmsJson]);

      //species
      const speciesResponse = await fetch(json.species);
      const speciesJson = await speciesResponse.json()
      setSpecies([speciesJson]);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePress();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}></TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <ScrollView>
            <View style={styles.info}>
              <Text style={styles.title}>Description</Text>
            </View>
            <Text style={styles.text}>Name: {data.name}</Text>
            <Text style={styles.text}>Height: {data.height}</Text>
            <Text style={styles.text}>Mass: {data.mass}</Text>
            <Text style={styles.text}>Hair Color: {data.hair_color}</Text>
            <Text style={styles.text}>Skin Color: {data.skin_color}</Text>
            <Text style={styles.text}>Eye Color: {data.eye_color}</Text>
            <Text style={styles.text}>Birth Year: {data.birth_year}</Text>
            <Text style={styles.text}>Gender: {data.gender}</Text>


            <View style={styles.info}>
              <Text style={styles.title}>Films</Text>
            </View>
            {films.map((film) => (
              <>
                <Text style={styles.text}>{film[0].title}</Text>
                <Text style={styles.text}>{film[1].title}</Text>
                <Text style={styles.text}>{film[2].title}</Text>
                <Text style={styles.text}>{film[3].title}</Text>
                <Text style={styles.text}>{film[4].title}</Text>
                <Text style={styles.text}>{film[5].title}</Text>
              </>
            ))}


            <View style={styles.info}>
              <Text style={styles.title}>Species</Text>
            </View>
                <Text style={styles.text}>{species[0].name}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    fontFamily: 'PressStart2P-Regular',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'PressStart2P-Regular',
    padding: 3,
    borderWidth: 2,
    borderColor: 'white',
    margin: 20,
  },
  title: {
    color: 'white',
    fontSize: 15,
    margin: 10,
    top: 3,
    fontFamily: 'PressStart2P-Regular',
  },
});
