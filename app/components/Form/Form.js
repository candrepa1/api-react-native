import React from "react";
import { Text, StyleSheet, TextInput, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import FlatButton from "../FlatButton/FlatButton";

const Form = ({ setInput }) => {
	return (
		<Formik
			initialValues={{ title: "" }}
			onSubmit={(values) => {
				setInput(values.title);
			}}
		>
			{(formikProps) => (
				<>
					<View style={styles.searchContainer}>
						<View style={styles.searchSection}>
							<Ionicons
								name="ios-search"
								size={20}
								color="grey"
								style={styles.searchIcon}
							/>
							<TextInput
								style={styles.input}
								placeholder="Search"
								onChangeText={formikProps.handleChange("title")}
								value={formikProps.values.title}
								placeholderTextColor="#ccc"
							/>
							<Ionicons name="ios-close-circle" size={22} color="grey" />
						</View>

						<FlatButton text="Search" onPress={formikProps.handleSubmit} />
					</View>
					<View style={styles.hr} />
				</>
			)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		width: "100%",
	},
	input: {
		color: "#fff",
		fontSize: 16,
	},
	searchSection: {
		// flex: 1,
		flexDirection: "row",
		// justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#15161B",
		borderRadius: 8,
		marginHorizontal: 17,
		paddingVertical: 5,
	},
	searchIcon: {
		padding: 10,
	},
	hr: {
		borderBottomColor: "white",
		borderBottomWidth: 0.3,
		marginVertical: 10,
		width: "100%",
	},
});

export default Form;
