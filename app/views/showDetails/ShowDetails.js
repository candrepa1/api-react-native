import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	Image,
	ScrollView,
	FlatList,
	SafeAreaView,
} from "react-native";
import PreviousEpisode from "../../components/PreviousEpisode/PreviousEpisode";
import ShowInfoCard from "../../components/ShowInfoCard/ShowInfoCard";

const ShowDetails = ({ route, navigation }) => {
	const { name, image, summary, _links, id } = route.params.show;
	const [images, setImages] = useState([]);
	const [summaryWithoutHtml, setSummaryWithoutHtml] = useState("");

	const stripHtml = (data) => {
		const regex = /(<([^>]+)>)/gi;
		const result = data.replace(regex, "");
		setSummaryWithoutHtml(result);
	};

	useEffect(() => {
		const fetchImages = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/images`);
			console.log(result.data[0]);
			setImages(result.data);
		};

		fetchImages(id);
		stripHtml(summary);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text style={styles.showName}>{name}</Text>
				<View style={styles.imageAndSummaryContainer}>
					<Image
						style={styles.image}
						source={{ uri: image.medium, width: 350, height: 250 }}
					/>
					<Text style={styles.summary}>{summaryWithoutHtml}</Text>
				</View>
				<ShowInfoCard info={route.params.show} />
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
			</ScrollView>
			{/* <FlatList
				data={images}
				keyExtractor={(item) => item.id.toString()}
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
			/> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	imageAndSummaryContainer: {
		// flexDirection: "row",
	},
	container: {
		flex: 1,
		backgroundColor: "#000",
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
		fontSize: 20,
	},
	summary: {
		color: "white",
		fontSize: 20,
		lineHeight: 30,
		// paddingHorizontal: 10,
		// textAlign: "justify",
	},
	image: {
		borderRadius: 7,
		resizeMode: "contain",
	},
	showName: {
		fontWeight: "bold",
		color: "white",
		fontSize: 35,
		textAlign: "center",
		marginVertical: 20,
	},
});

export default ShowDetails;
