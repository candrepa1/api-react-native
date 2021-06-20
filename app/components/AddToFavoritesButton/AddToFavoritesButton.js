import React, { useCallback, useState, useContext } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import globalStyles from "../../../styles/globalStyles";

const AddToFavoritesButton = ({ item }) => {
	const [favorites, setFavorites] = useState([]);
	const [message, setMessage] = useState("");

	const getValue = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("favorites");
			jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : [];
		} catch (e) {
			console.log(e);
		}
	};

	const checkIfSaved = (data) => {
		if (favorites.find((item) => item.id === data.id)) {
			setMessage("Saved");
		} else {
			setMessage("Add to favorites");
		}
	};

	const addToFavorites = async (data) => {
		try {
			let newFavorites = [...favorites];
			if (!favorites.find((item) => item.id === data.id)) {
				newFavorites.push(data);
			}
			const jsonValue = JSON.stringify(newFavorites);
			await AsyncStorage.setItem("favorites", jsonValue);
		} catch (e) {
			console.log(e);
		}
	};

	const removeFromFavorites = async (data) => {
		try {
			const newFavorites = favorites.filter((item) => item.id !== data.id);
			const jsonValue = JSON.stringify(newFavorites);
			await AsyncStorage.setItem("favorites", jsonValue);
		} catch (e) {
			console.log(e);
		}
	};

	useFocusEffect(
		useCallback(() => {
			// Do something when the screen is focused
			getValue();
			checkIfSaved(item);
		}, [favorites])
	);

	return (
		<TouchableOpacity
			onPress={
				message === "Saved"
					? () => removeFromFavorites(item)
					: () => addToFavorites(item)
			}
			style={globalStyles.buttonContainer}
		>
			<View style={styles.button}>
				<Ionicons
					name={message === "Saved" ? "ios-heart" : "ios-heart-outline"}
					size={24}
					color="white"
				/>
				<Text style={styles.text}>{message}</Text>
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
