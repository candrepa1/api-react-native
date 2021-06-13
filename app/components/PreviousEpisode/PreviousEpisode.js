import React, { useEffect } from "react";
import axios from "axios";
import {
	Text,
	StyleSheet,
	TextInput,
	View,
	Button,
	Image,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useState } from "react/cjs/react.development";

const PreviousEpisode = ({ episode }) => {
	const [episodeInfo, setEpisodeInfo] = useState("");
	useEffect(() => {
		const fetchEpisodeData = async (episode) => {
			const result = await axios(episode);
			setEpisodeInfo(result.data);
		};
		fetchEpisodeData(episode);
	}, []);
	return (
		<View>
			<Text style={styles.text}>Previous Episode</Text>
			<Text style={styles.text}>{episodeInfo.name}</Text>
			<Text style={styles.text}>
				Episode {episodeInfo.season}x{episodeInfo.number}; {episodeInfo.airdate}
			</Text>
			<Image
				source={{ uri: episodeInfo.image?.medium, width: 200, height: 200 }}
			/>
			<Text style={styles.text}>{episodeInfo.summary}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "white",
		fontSize: 30,
	},
});

export default PreviousEpisode;
