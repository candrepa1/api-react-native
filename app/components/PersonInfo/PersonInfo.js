import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActorContext } from "../../../context/ActorContext";

const PersonInfo = () => {
	const { actorSelected } = useContext(ActorContext);

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
				Age:{" "}
				<Text style={styles.normalText}>
					{calculateAge(actorSelected.birthday)}
				</Text>
			</Text>
			<Text style={styles.boldText}>
				Birthday:
				<Text style={styles.normalText}> {actorSelected.birthday}</Text>
			</Text>
			{actorSelected.country && (
				<Text style={styles.boldText}>
					Born in:{" "}
					<Text style={styles.normalText}>{actorSelected.country.name}</Text>
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#f7f7f7",
		padding: 15,
		marginRight: 15,
		borderRadius: 5,
	},
	title: {
		fontSize: 29,
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
