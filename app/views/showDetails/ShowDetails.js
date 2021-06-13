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
import PreviousEpisode from "../../components/PreviousEpisode/PreviousEpisode";
import ShowInfoCard from "../../components/ShowInfoCard/ShowInfoCard";

const ShowDetails = ({ route, navigation }) => {
	const { name, image, summary, _links, id } = route.params.show;
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/images`);
			console.log(result.data[0]);
			setImages(result.data);
		};

		fetchImages(id);
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.text}>{name}</Text>
				<Image
					style={styles.image}
					source={{ uri: image.medium, width: "90%", height: 400 }}
				/>
				<ShowInfoCard info={route.params.show} />
				<Text style={styles.text}>{summary}</Text>
				<PreviousEpisode episode={_links.previousepisode.href} />
				<Button
					title="CAST"
					onPress={() => navigation.navigate("Cast", { showId: id })}
				/>
				<Button
					title="EPISODES"
					onPress={() => navigation.navigate("Episodes", { showId: id })}
				/>
				<Button
					title="CREW"
					onPress={() => navigation.navigate("Crew", { showId: id })}
				/>
				<FlatList
					data={images}
					renderItem={({ item }) => (
						<View>
							<Image
								source={{
									uri: item.resolutions.medium
										? item.resolutions.medium.url
										: item.resolutions.original.url,
									width: 100,
									height: 100,
								}}
							/>
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

export default ShowDetails;
