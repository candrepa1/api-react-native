import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import axios from "axios";
import globalStyles from "../../../styles/globalStyles";

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
		<FlatList
			data={crew}
			key={"+"}
			style={globalStyles.extrasContainer}
			numColumns={2}
			keyExtractor={(item) => `${item.person.id}-${item.type}`}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: item.person.image
									? item.person.image.medium
									: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
							}}
							style={styles.image}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.title}>{item.type}</Text>
						<Text style={styles.crewName}>{item.person.name}</Text>
					</View>
				</View>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "48%",
		backgroundColor: "#f7f7f7",
		borderRadius: 5,
		marginRight: 20,
		marginBottom: 20,
	},
	imageContainer: {
		width: "100%",
	},
	image: {
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	textContainer: {
		marginVertical: 5,
		marginHorizontal: 5,
		flex: 1,
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
	},
	crewName: {
		fontSize: 17,
	},
});

export default Crew;
