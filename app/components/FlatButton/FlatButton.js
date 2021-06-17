import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import globalStyles from "../../../styles/globalStyles";

const FlatButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={globalStyles.buttonContainer}>
			<View style={styles.button}>
				<Text style={styles.text}>{text}</Text>
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
	},
	text: {
		color: "white",
		fontSize: 17,
		textAlign: "center",
		fontWeight: "bold",
	},
});

export default FlatButton;
