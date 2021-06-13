import React from "react";
import { Text, StyleSheet, TextInput, View, Button } from "react-native";
import { Formik } from "formik";

const Form = ({ setInput }) => {
	return (
		<Formik
			initialValues={{ title: "" }}
			onSubmit={(values) => {
				setInput(values.title);
			}}
		>
			{(formikProps) => (
				<View>
					<TextInput
						style={styles.input}
						placeholder="Look up a show"
						onChangeText={formikProps.handleChange("title")}
						value={formikProps.values.title}
					/>
					<Button
						title="Search"
						color="#3e948b"
						onPress={formikProps.handleSubmit}
					></Button>
				</View>
			)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "white",
		width: 200,
		padding: 10,
	},
});

export default Form;
