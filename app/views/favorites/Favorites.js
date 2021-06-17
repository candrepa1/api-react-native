import React, { useState, useCallback } from "react";
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Image,
	View,
	FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import RemoveButton from "../../components/RemoveButton/RemoveButton";

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);

	const getValue = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("favorites");
			jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
		} catch (e) {
			console.log(e);
		}
	};

	const removeFavorite = async (id) => {
		try {
			const newFavorites = favorites.filter((item) => item.id !== id);
			const jsonValue = JSON.stringify(newFavorites);
			await AsyncStorage.setItem("favorites", jsonValue);
		} catch (e) {
			// saving error
		}
	};

	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			getValue();
		}, [favorites])
	);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Your favorites:</Text>
			<FlatList
				data={favorites}
				numColumns={2}
				key={"#"}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.favoriteContainer}>
						<Image
							source={{ uri: item.image?.medium, height: 200 }}
							style={styles.image}
						/>
						<View style={styles.buttonContainer}>
							<RemoveButton removeFavorite={removeFavorite} id={item.id} />
							<Text style={styles.name}>{item.name}</Text>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#000",
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
		paddingHorizontal: 15,
	},
	title: {
		color: "white",
		fontSize: 35,
		marginVertical: 10,
	},
	favoriteContainer: {
		borderRadius: 10,
		marginTop: 20,
		marginRight: 10,
		width: "49%",
	},
	image: {
		alignSelf: "center",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		width: "100%",
	},
	text: {
		textAlign: "center",
		fontSize: 20,
	},
	name: {
		textAlign: "center",
		fontSize: 20,
		width: "80%",
		color: "white",
	},
	buttonContainer: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "center",
		marginVertical: 10,
	},
});

export default Favorites;
