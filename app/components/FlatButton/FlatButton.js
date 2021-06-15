import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const FlatButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
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
		backgroundColor: "#3e948b",
	},
	text: {
		color: "black",
		fontSize: 25,
		textAlign: "center",
	},
});

export default FlatButton;
