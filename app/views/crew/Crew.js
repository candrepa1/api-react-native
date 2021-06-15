import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";

const Crew = ({ route }) => {
	const { showId } = route.params;
	const [crew, setCrew] = useState([]);

	useEffect(() => {
		const fetchCrewData = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/crew`);
			setCrew(result.data);
		};
		fetchCrewData(showId);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Crew</Text>
			<FlatList
				data={crew}
				keyExtractor={(item) => `${item.person.id}-${item.type}`}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Image
							source={{
								uri: item.person.image?.medium,
								width: 150,
								height: 150,
							}}
						/>
						<Text style={styles.text}>{item.type}</Text>
						<Text style={styles.text}>{item.person.name}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		// justifyContent: "center",
	},
	card: {
		backgroundColor: "#3e948b",
		borderRadius: 5,
		padding: 15,
		marginBottom: 20,
		justifyContent: "center",
		textAlign: "center",
	},
	text: {
		color: "white",
		// textTransform: "uppercase",
		fontSize: 30,
	},
	image: {
		borderRadius: 7,
	},
});

export default Crew;
