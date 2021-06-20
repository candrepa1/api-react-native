import React, { useState, useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ShowContext } from "../../../context/ShowContext";
import { ActorContext } from "../../../context/ActorContext";

const Form = ({ name }) => {
	const [input, setInput] = useState("");

	const { fetchShowData } = useContext(ShowContext);
	const { fetchActorData } = useContext(ActorContext);

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
							placeholder={`Search by ${name} name`}
							placeholderTextColor="#ccc"
							value={input}
							onChangeText={setInput}
							onSubmitEditing={() =>
								name === "show" ? fetchShowData(input) : fetchActorData(input)
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
		marginVertical: 15,
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
		width: "100%",
	},
});

export default Form;
