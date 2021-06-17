import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Form = ({ setShowName, setActorName }) => {
	const [input, setInput] = useState("");
	return (
		<>
			<View style={styles.searchContainer}>
				<View style={styles.searchSection}>
					<View style={styles.iconAndPlaceholder}>
						<Ionicons
							name="ios-search"
							size={20}
							color="grey"
							style={styles.searchIcon}
						/>
						<TextInput
							style={styles.input}
							placeholder="Search"
							placeholderTextColor="#ccc"
							value={input}
							onChangeText={setInput}
							onSubmitEditing={() =>
								setShowName ? setShowName(input) : setActorName(input)
							}
						/>
					</View>
					{input.length > 0 && (
						<Ionicons
							name="ios-close-circle"
							size={24}
							color="grey"
							style={styles.clearAllIcon}
							onPress={() => setInput("")}
						/>
					)}
				</View>
			</View>
			<View style={styles.hr} />
		</>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		width: "100%",
	},
	searchSection: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#15161B",
		borderRadius: 8,
		marginHorizontal: 17,
		paddingVertical: 5,
		justifyContent: "space-between",
	},
	iconAndPlaceholder: {
		flexDirection: "row",
	},
	searchIcon: {
		padding: 10,
	},
	input: {
		color: "#fff",
		fontSize: 16,
		width: "80%",
	},
	clearAllIcon: {
		marginRight: 10,
	},
	hr: {
		borderBottomColor: "white",
		borderBottomWidth: 0.3,
		marginVertical: 10,
		width: "100%",
	},
});

export default Form;
