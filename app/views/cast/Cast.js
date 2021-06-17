import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import axios from "axios";
import globalStyles from "../../../styles/globalStyles";

const Cast = ({ route }) => {
	const { showId } = route.params;
	const [cast, setCast] = useState([]);

	useEffect(() => {
		const fetchCastData = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/cast`);
			setCast(result.data);
		};
		fetchCastData(showId);
	}, []);

	return (
		<FlatList
			data={cast}
			style={globalStyles.extrasContainer}
			key={"_"}
			numColumns={2}
			keyExtractor={(item) => item.person.id.toString()}
			renderItem={({ item }) => {
				return (
					<View style={styles.card}>
						<View style={styles.imageContainer}>
							<Image
								source={{
									uri: item?.character.image.medium,
								}}
								style={styles.image}
							/>
						</View>
						<View style={styles.textContainer}>
							<Text style={styles.actorName}>{item?.person.name}</Text>
							<Text style={styles.characterName}>
								as {item?.character.name}
							</Text>
						</View>
					</View>
				);
			}}
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
	actorName: {
		fontWeight: "bold",
		fontSize: 22,
	},
	characterName: {
		fontSize: 17,
	},
});

export default Cast;
