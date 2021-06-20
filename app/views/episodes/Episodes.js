import React, { useEffect, useState, useContext } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import axios from "axios";
import { ShowContext } from "../../../context/ShowContext";
import useUtilFunctions from "../../../hooks/useUtilFunctions";

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);

	const { showSelected } = useContext(ShowContext);
	const { stripHtml, formatDate } = useUtilFunctions();

	const fetchEpisodeData = async (id) => {
		const result = await axios(`http://api.tvmaze.com/shows/${id}/episodes`);
		setEpisodes(result.data);
	};

	useEffect(() => {
		fetchEpisodeData(showSelected.id);
	}, []);

	return (
		<FlatList
			data={episodes}
			style={styles.container}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<Text style={styles.episodeTitle}>
						{item.season}x{item.number}: {item.name}
					</Text>
					<Text style={styles.text}>Airdate: {formatDate(item.airdate)}</Text>
					<Image source={{ uri: item?.image.medium }} style={styles.image} />
					<Text style={styles.text}>{stripHtml(item.summary)}</Text>
				</View>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		padding: 10,
	},
	card: {
		borderRadius: 5,
		marginRight: 20,
		marginBottom: 20,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		paddingBottom: 20,
	},
	episodeTitle: {
		color: "white",
		fontSize: 30,
	},
	text: {
		color: "white",
		fontSize: 20,
		textAlign: "justify",
	},
	image: {
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginVertical: 10,
	},
});

export default Episodes;
