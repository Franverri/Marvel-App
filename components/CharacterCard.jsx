import * as React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
		flexDirection: 'row', 
		alignItems: 'center', 
		marginLeft: 20,
		marginRight: 20,
		marginTop: 5,
		borderWidth: 2,
		padding: 10,
		borderColor: 'darkred',
		borderRadius: 10,
		backgroundColor: 'rgb(223, 184, 184)'
  },
	image: {
		width: 30,
		height: 30,
		marginRight: 10
	},
	font: {
		fontWeight: 'bold'
	}
});


export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail')}
		>
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}

