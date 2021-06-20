import React, { useContext } from "react";
import { Text, StyleSheet, View, Linking } from "react-native";
import { ShowContext } from "../../../context/ShowContext";

const ShowInfoCard = ({ info }) => {
	const { showSelected } = useContext(ShowContext);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Show Info</Text>
			<Text style={styles.boldText}>
				Network:{" "}
				<Text style={styles.regularText}>{showSelected.network?.name}</Text>
			</Text>
			<Text style={styles.boldText}>
				Schedule:{" "}
				<Text style={styles.regularText}>
					{showSelected.schedule?.days.map((day, index) => (
						<Text key={index}>{day}s</Text>
					))}{" "}
					at {showSelected.schedule?.time} ({showSelected.runtime} min)
				</Text>
			</Text>
			<Text style={styles.boldText}>
				Status: <Text style={styles.regularText}>{showSelected.status}</Text>
			</Text>
			<Text style={styles.boldText}>
				Show Type: <Text style={styles.regularText}>{showSelected.type}</Text>
			</Text>
			<Text style={styles.boldText}>
				Genres:{" "}
				<Text style={styles.regularText}>
					{showSelected?.genres.map((genre, index) => (
						<Text key={index}>{genre} | </Text>
					))}
				</Text>
			</Text>
			{showSelected.officialSite && (
				<Text style={styles.boldText}>
					Official site:{" "}
					<Text
						style={styles.hyperlink}
						onPress={() => Linking.openURL(showSelected.officialSite)}
					>
						{showSelected.officialSite}
					</Text>
				</Text>
			)}
			{showSelected.rating.average && (
				<Text style={styles.boldText}>
					Rating:{" "}
					<Text style={styles.regularText}>{showSelected.rating.average}</Text>
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f7f7f7",
		padding: 15,
		paddingLeft: 25,
		margin: 20,
		borderRadius: 5,
	},
	title: {
		fontSize: 30,
		marginVertical: 10,
		textAlign: "center",
	},
	boldText: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 10,
	},
	regularText: {
		fontWeight: "normal",
		fontSize: 18,
	},
	hyperlink: {
		fontWeight: "normal",
		textDecorationLine: "underline",
	},
});

export default ShowInfoCard;
