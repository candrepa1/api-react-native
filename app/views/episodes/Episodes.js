import axios from "axios";
import React, { useEffect, useState } from "react";
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

const Episodes = ({ route }) => {
	const { showId } = route.params;
	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		const fetchEpisodeData = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/episodes`);
			console.log(result.data[0]);
			setEpisodes(result.data);
		};
		fetchEpisodeData(showId);
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.text}>EPISODE LIST</Text>
				<FlatList
					data={episodes}
					renderItem={({ item }) => (
						<View style={styles.card}>
							<Text style={styles.text}>
								{item.season}x{item.number}: {item.name}
							</Text>
							<Text>Airdate: {item.airdate}</Text>
							<Image
								source={{ uri: item?.image.medium, width: 200, height: 200 }}
							/>
							<Text>{item.summary}</Text>
						</View>
					)}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		justifyContent: "center",
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

export default Episodes;
