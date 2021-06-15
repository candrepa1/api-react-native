import React from "react";
import { Text, StyleSheet, View, Linking } from "react-native";

const ShowInfoCard = ({ info }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Show Info</Text>
			<Text style={styles.boldText}>
				Network: <Text style={styles.regularText}>{info.network.name}</Text>
			</Text>
			<Text style={styles.boldText}>
				Schedule:{" "}
				<Text style={styles.regularText}>
					{info.schedule?.days.map((day, index) => (
						<Text key={index}>{day}s</Text>
					))}{" "}
					at {info.schedule?.time} ({info.runtime} min)
				</Text>
			</Text>
			<Text style={styles.boldText}>
				Status: <Text style={styles.regularText}>{info.status}</Text>
			</Text>
			<Text style={styles.boldText}>
				Show Type: <Text style={styles.regularText}>{info.type}</Text>
			</Text>
			<Text style={styles.boldText}>
				Genres:{" "}
				<Text style={styles.regularText}>
					{info?.genres.map((genre, index) => (
						<Text key={index}>{genre} | </Text>
					))}
				</Text>
			</Text>
			<Text style={styles.boldText}>
				Official site:{" "}
				<Text
					style={styles.hyperlink}
					onPress={() => Linking.openURL(info.officialSite)}
				>
					{info.officialSite}
				</Text>
			</Text>
			<Text style={styles.boldText}>
				Rating: <Text style={styles.regularText}>{info.rating.average}</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f7f7f7",
		// alignItems: "center",
		padding: 15,
		margin: 20,
		borderRadius: 5,
	},
	title: {
		fontSize: 30,
		marginVertical: 10,
	},
	boldText: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 5,
	},
	hyperlink: {
		color: "blue",
	},
	regularText: {
		fontWeight: "normal",
		fontSize: 18,
	},
});

export default ShowInfoCard;
