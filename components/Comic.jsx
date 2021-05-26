import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: 260,
		backgroundColor: 'rgb(223, 184, 184)',
		borderWidth: 2,
		borderColor: 'darkred',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		marginTop: 10,
		width: 230,
		height: 354
	},
	font: {
		padding: 10,
		fontWeight: 'bold'
	}
});

export default function Comic({ name, image }) {
  return (
    <View style={styles.container}>
			<Image style={styles.image}
				source={{uri: image}}
			/>
			<Text style={styles.font}>{name}</Text>
    </View>
  )
}