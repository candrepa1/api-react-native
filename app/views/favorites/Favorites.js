import React, { useState, useCallback, useEffect } from "react";
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
import globalStyles from "../../../styles/globalStyles";

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const getValue = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("favorites");
			jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
		} catch (e) {
			setErrorMessage("Error getting favorites");
		}
	};

	const removeFavorite = async (id) => {
		try {
			const newFavorites = favorites.filter((fav) => fav.id !== id);
			const jsonValue = JSON.stringify(newFavorites);
			await AsyncStorage.setItem("favorites", jsonValue);
		} catch (e) {
			setErrorMessage("Error removing item");
		}
	};

	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			getValue();
		}, [favorites])
	);

	useEffect(() => {}, []);

	return (
		<SafeAreaView style={styles.container}>
			{errorMessage ? (
				<Text style={globalStyles.errorText}>{errorMessage}</Text>
			) : null}
			<FlatList
				data={favorites}
				numColumns={2}
				key={"#"}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.favoriteContainer}>
						<Image source={{ uri: item.image?.medium }} style={styles.image} />
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
		height: 200,
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
