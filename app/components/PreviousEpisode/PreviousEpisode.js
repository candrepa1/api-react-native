import React, { useEffect } from "react";
import axios from "axios";
import { Text, StyleSheet, View, Image } from "react-native";
import { useState } from "react/cjs/react.development";

const PreviousEpisode = ({ episode }) => {
	const [episodeInfo, setEpisodeInfo] = useState("");

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

	const stripHtml = (data) => {
		if (data) {
			const regex = /(<([^>]+)>)/gi;
			const result = data.replace(regex, "");
			return result;
		}
	};

	useEffect(() => {
		const fetchEpisodeData = async (episode) => {
			const result = await axios(episode);
			setEpisodeInfo(result.data);
		};
		fetchEpisodeData(episode);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Previous Episode</Text>
			<View style={styles.secondContainer}>
				<Image
					source={{ uri: episodeInfo.image?.medium, width: 150, height: 150 }}
				/>
				<View>
					<Text style={styles.text}>{episodeInfo.name}</Text>
					<Text style={styles.text}>
						Episode {episodeInfo.season}x{episodeInfo.number};{" "}
						{formatDate(episodeInfo.airdate)}
					</Text>
					<Text style={styles.text}>{stripHtml(episodeInfo.summary)}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "white",
		fontSize: 20,
	},
	container: {
		marginVertical: 20,
		marginHorizontal: 10,
	},
	title: {
		fontSize: 35,
		color: "white",
	},
	secondContainer: {
		flexDirection: "row",
	},
});

export default PreviousEpisode;
