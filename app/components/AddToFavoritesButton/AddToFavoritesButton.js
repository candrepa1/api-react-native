import React, { useCallback, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import globalStyles from "../../../styles/globalStyles";

const AddToFavoritesButton = ({ addToFavorites, show }) => {
	const [favorites, setFavorites] = useState([]);

	const getValue = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("favorites");
			jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
		} catch (e) {
			console.log(e);
		}
	};

	const checkIfSaved = (show) => {
		let message = "";
		if (favorites.find((item) => item.id === show.id)) {
			message += "Saved";
		} else {
			message += "Add to favorites";
		}
		return message;
	};

	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			getValue();
		}, [favorites])
	);

	return (
		<TouchableOpacity
			onPress={() => addToFavorites(show)}
			style={globalStyles.buttonContainer}
		>
			<View style={styles.button}>
				<Ionicons
					name={
						checkIfSaved(show) === "Saved" ? "ios-heart" : "ios-heart-outline"
					}
					size={24}
					color="white"
				/>
				<Text style={styles.text}>{checkIfSaved(show)}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
		borderRadius: 8,
		paddingVertical: 10,
		borderColor: "#e35940",
		borderWidth: 1,
		padding: 5,
		alignItems: "center",
	},
	text: {
		color: "white",
		fontSize: 17,
		textAlign: "center",
		fontWeight: "bold",
	},
});

export default AddToFavoritesButton;
