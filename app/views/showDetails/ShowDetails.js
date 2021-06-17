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
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PreviousEpisode from "../../components/PreviousEpisode/PreviousEpisode";
import ShowInfoCard from "../../components/ShowInfoCard/ShowInfoCard";
import AddToFavoritesButton from "../../components/AddToFavoritesButton/AddToFavoritesButton";
import FlatButton from "../../components/FlatButton/FlatButton";

const ShowDetails = ({ route, navigation }) => {
	const { image, summary, _links, id, rating } = route.params.show;
	const [summaryWithoutHtml, setSummaryWithoutHtml] = useState("");
	const [stars, setStars] = useState([]);

	const stripHtml = (data) => {
		const regex = /(<([^>]+)>)/gi;
		const result = data.replace(regex, "");
		setSummaryWithoutHtml(result);
	};

	const getValue = async () => {
		try {
			let currentFavorites = "";
			const jsonValue = await AsyncStorage.getItem("favorites");
			jsonValue != null ? (currentFavorites = JSON.parse(jsonValue)) : null;
			return currentFavorites;
		} catch (e) {
			console.log(e);
		}
	};

	const addToFavorites = async (data) => {
		try {
			const arrayOfFavorites = await getValue();
			if (!arrayOfFavorites.find((item) => item.id === data.id)) {
				arrayOfFavorites.push(data);
			}
			const jsonValue = JSON.stringify(arrayOfFavorites);
			await AsyncStorage.setItem("favorites", jsonValue);
		} catch (e) {
			console.log(e);
		}
	};

	const starReviews = (limit) => {
		let starsEl = "";
		for (let i = 0; i < limit; i++) {
			starsEl += <Ionicons name="ios-star-sharp" size={24} color="white" />;
		}
		setStars(starsEl);
	};

	useEffect(() => {
		stripHtml(summary);
		// starReviews(rating.average);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.imageAndButtonsContainer}>
					<Image
						style={styles.image}
						source={{ uri: image.medium, height: 250 }}
					/>
					<View style={styles.buttonsContainer}>
						<AddToFavoritesButton
							addToFavorites={addToFavorites}
							show={route.params.show}
						/>
						<FlatButton
							text="Cast"
							onPress={() => navigation.navigate("Cast", { showId: id })}
						/>
						<FlatButton
							text="Crew"
							onPress={() => navigation.navigate("Crew", { showId: id })}
						/>
						<FlatButton
							text="Episodes"
							onPress={() => navigation.navigate("Episodes", { showId: id })}
						/>
						{/* <FlatList
							data={stars}
							renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
						/> */}
					</View>
				</View>
				<Text style={styles.summary}>{summaryWithoutHtml}</Text>
				<ShowInfoCard info={route.params.show} />
				<PreviousEpisode episode={_links.previousepisode.href} />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
	imageAndButtonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
	},
	image: {
		borderRadius: 7,
		resizeMode: "contain",
		width: "60%",
	},
	buttonsContainer: {
		width: "100%",
	},
	summary: {
		color: "white",
		fontSize: 20,
		lineHeight: 30,
		paddingHorizontal: 10,
	},
});

export default ShowDetails;
