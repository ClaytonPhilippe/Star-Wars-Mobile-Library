import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native"

const windowHeight = Dimensions.get("window").height

export function Character01({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  const [isLoading, setLoading] = useState(true)
  const [character, setCharacter] = useState({})
  const [films, setFilms] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [starships, setStarships] = useState([])

  const fetchData = async () => {
    try {
      const characterResponse = await fetch("https://swapi.dev/api/people/1")
      if (!characterResponse.ok) {
        throw new Error("Falha ao buscar dados do personagem na API")
      }
      const characterData = await characterResponse.json()
      setCharacter(characterData)

      const filmDataPromises = characterData.films.map(async (filmUrl) => {
        const response = await fetch(filmUrl)
        if (!response.ok) {
          throw new Error("Falha ao buscar dados dos filmes na API")
        }
        return await response.json()
      })

      const filmData = await Promise.all(filmDataPromises)
      setFilms(filmData)

      const vehicleDataPromises = characterData.vehicles.map(
        async (vehicleUrl) => {
          const response = await fetch(vehicleUrl)
          if (!response.ok) {
            throw new Error("Falha ao buscar dados dos veículos na API")
          }
          return await response.json()
        }
      )

      const vehicleData = await Promise.all(vehicleDataPromises)
      setVehicles(vehicleData)

      const starshipDataPromises = characterData.starships.map(
        async (starshipUrl) => {
          const response = await fetch(starshipUrl)
          if (!response.ok) {
            throw new Error("Falha ao buscar dados dos starships na API")
          }
          return await response.json()
        }
      )

      const starshipData = await Promise.all(starshipDataPromises)
      setStarships(starshipData)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>

      <ScrollView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.info}>
              <Text style={styles.title}>Description</Text>
            </View>
            <Text style={styles.text}>Name: {character.name}</Text>
            <Text style={styles.text}>Height: {character.height}</Text>
            <Text style={styles.text}>Mass: {character.mass}</Text>
            <Text style={styles.text}>Hair Color: {character.hair_color}</Text>
            <Text style={styles.text}>Skin Color: {character.skin_color}</Text>
            <Text style={styles.text}>Eye Color: {character.eye_color}</Text>
            <Text style={styles.text}>Birth Year: {character.birth_year}</Text>
            <Text style={styles.text}>Gender: {character.gender}</Text>

            <View style={styles.info}>
              <Text style={styles.title}>Films</Text>
            </View>
            <FlatList
              data={films}
              keyExtractor={({ episode_id }) => episode_id}
              renderItem={({ item }) => (
                <Text style={styles.text}>{item.title}</Text>
              )}
            />

            <View style={styles.info}>
              <Text style={styles.title}>Vehicles</Text>
            </View>
            <FlatList
              data={vehicles}
              keyExtractor={({ name }) => name}
              renderItem={({ item }) => (
                <Text style={styles.text}>{item.name}</Text>
              )}
            />

            <View style={styles.info}>
              <Text style={styles.title}>Starships</Text>
            </View>
            <FlatList
              data={starships}
              keyExtractor={({ name }) => name}
              renderItem={({ item }) => (
                <Text style={styles.text}>{item.name}</Text>
              )}
            />
          </View>
        )}
        <TouchableOpacity onPress={handleBack} style={styles.icon}>
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              fontSize: 30,
              fontFamily: 'PressStart2P-Regular',
              bottom: '170%',
              right: -15

            }}>
            &lt;
          </Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    minHeight: windowHeight,
  },
  text: {
    color: "white",
    fontSize: 15,
    padding: 10,
    left: 10,
    fontFamily: "PressStart2P-Regular",
  },
  info: {
    alignItems: "center",
    fontFamily: "PressStart2P-Regular",
    padding: 3,
    borderWidth: 2,
    borderColor: "white",
    margin: 20,
  },
  title: {
    color: "white",
    fontSize: 15,
    margin: 10,
    top: 3,
    fontFamily: "PressStart2P-Regular",
  },
  icon: {
    bottom: '40%',
    right: '40%',
  },
})
