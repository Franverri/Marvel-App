import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import apiParams from '../config.js';
import axios from 'axios';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
	image: {
		width: imageWidth,
    height: imageHeight,
		marginRight: 10
	},
  title: {
    alignSelf: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  description: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
		borderColor: 'darkred',
		borderRadius: 10,
		backgroundColor: 'rgb(223, 184, 184)'
  }
});

export default function Information({ id }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters/${id}`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results[0]))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <>
            <Image 
              style={styles.image}
              source={{uri: `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}}
            />
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </>
        )
      }
    </View>
  )
}