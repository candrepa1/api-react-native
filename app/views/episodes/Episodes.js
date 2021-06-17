import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import axios from "axios";

const Episodes = ({ route }) => {
	const { showId } = route.params;
	const [episodes, setEpisodes] = useState([]);

	const stripHtml = (data) => {
		if (data) {
			const regex = /(<([^>]+)>)/gi;
			const result = data.replace(regex, "");
			return result;
		}
	};

	const formatDate = (date) => {
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		];
		if (date) {
			const splitted = date.split("-");
			const newDate = `${months[splitted[1] - 1]} ${splitted[2]}, ${
				splitted[0]
			}`;
			return newDate;
		}
	};

	useEffect(() => {
		const fetchEpisodeData = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/episodes`);
			setEpisodes(result.data);
		};
		fetchEpisodeData(showId);
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
