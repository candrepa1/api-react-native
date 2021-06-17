import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RemoveButton = ({ removeFavorite, id }) => {
	return (
		<TouchableOpacity
			onPress={() => removeFavorite(id)}
			style={styles.container}
		>
			<Ionicons name="ios-trash-outline" size={24} color="white" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignContent: "center",
		justifyContent: "center",
		textAlign: "center",
	},
});

export default RemoveButton;
