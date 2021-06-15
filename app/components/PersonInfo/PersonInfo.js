import React from "react";
import {
	Text,
	Image,
	FlatList,
	View,
	SafeAreaView,
	StyleSheet,
} from "react-native";

const PersonInfo = ({ country, birthday }) => {
	const calculateAge = (birthdate) => {
		const currentDate = new Date();
		const birthDate = new Date(birthdate);
		let age = currentDate.getFullYear() - birthDate.getFullYear();
		const month = currentDate.getMonth() - birthDate.getMonth();
		if (
			month < 0 ||
			(month === 0 && currentDate.getDate() < birthDate.getDate())
		) {
			age--;
		}
		return age;
	};

	return (
		<View style={styles.card}>
			<Text style={styles.title}>Person Info</Text>
			<Text style={styles.boldText}>
				Age: <Text style={styles.normalText}>{calculateAge(birthday)}</Text>
			</Text>
			<Text style={styles.boldText}>
				Birthday:
				<Text style={styles.normalText}> {birthday}</Text>
			</Text>
			<Text style={styles.boldText}>
				Born in: <Text style={styles.normalText}>{country.name}</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
	},
	card: {
		width: "90%",
		backgroundColor: "#f7f7f7",
		padding: 15,
		margin: 20,
		borderRadius: 5,
	},
	boldText: {
		fontWeight: "bold",
		fontSize: 20,
		marginTop: 5,
	},
	normalText: {
		fontWeight: "normal",
		fontSize: 20,
	},
});

export default PersonInfo;
