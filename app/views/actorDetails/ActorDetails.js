import React, { useEffect, useState } from "react";
import {
	Text,
	Image,
	FlatList,
	View,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Button,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PersonInfo from "../../components/PersonInfo/PersonInfo";
import AddToFavoritesButton from "../../components/AddToFavoritesButton/AddToFavoritesButton";

const ActorDetails = ({ route }) => {
	const { id, country, birthday, image } = route.params.person;
	const [castFeatures, setCastFeatures] = useState([]);
	const [crewFeatures, setCrewFeatures] = useState([]);

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

	useEffect(() => {
		const fetchCastFeatureData = async (actorId) => {
			const { data } = await axios(
				`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`
			);
			setCastFeatures(data);
		};

		const fetchCrewFeatureData = async (actorId) => {
			const { data } = await axios(
				`http://api.tvmaze.com/people/${actorId}/crewcredits?embed=show`
			);
			setCrewFeatures(data);
		};

		fetchCastFeatureData(id);
		fetchCrewFeatureData(id);
	}, []);

	return (
		<ScrollView style={styles.container}>
			<Image
				source={{ uri: image?.medium, width: 350, height: 350 }}
				style={styles.image}
			/>
			<View style={styles.doubleContainer}>
				<PersonInfo country={country} birthday={birthday} />
				<AddToFavoritesButton
					addToFavorites={addToFavorites}
					show={route.params.person}
				/>
			</View>
			{crewFeatures.length > 0 && (
				<View style={styles.crewFeatureContainer}>
					<Text style={styles.title}>Crew Features</Text>
					<FlatList
						data={crewFeatures}
						keyExtractor={(item) => `${item.type}-${item._embedded.show.id}`}
						renderItem={({ item }) => (
							<View style={styles.showContainer}>
								<Text style={styles.boldText}>
									{item._embedded.show.name}:{" "}
									<Text style={styles.text}>{item.type}</Text>
								</Text>
							</View>
						)}
					/>
				</View>
			)}

			<Text style={styles.title}>Known For</Text>
			<View style={styles.castFeatureContainer}>
				<FlatList
					data={castFeatures}
					key={"_"}
					numColumns={2}
					keyExtractor={(item) => item._embedded.show.id.toString()}
					renderItem={({ item }) => {
						if (item._embedded.show.image) {
							return (
								<View style={styles.castFeature}>
									<Image
										source={{
											uri: item._embedded.show.image?.medium,
										}}
										style={styles.castImage}
									/>
								</View>
							);
						}
					}}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
	image: {
		width: "90%",
		height: 300,
		margin: 20,
		resizeMode: "contain",
	},
	castImage: {
		borderRadius: 8,
		width: "90%",
		height: 300,
	},
	doubleContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 20,
		marginTop: 10,
	},
	title: {
		color: "white",
		fontSize: 35,
		margin: 20,
	},
	castFeatureContainer: {
		margin: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	castFeature: {
		borderRadius: 10,
		marginBottom: 30,
		marginRight: 10,
		width: "49%",
	},
	crewFeatureContainer: {},
	text: {
		color: "white",
		fontWeight: "normal",
		fontSize: 19,
	},
	showContainer: {
		marginHorizontal: 20,
	},
	boldText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 20,
		marginBottom: 8,
	},
});

export default ActorDetails;
