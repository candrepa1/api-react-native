import React, { useEffect, useState, useContext } from "react";
import {
	Text,
	Image,
	FlatList,
	View,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	LogBox,
} from "react-native";
import axios from "axios";

import PersonInfo from "../../components/PersonInfo/PersonInfo";
import AddToFavoritesButton from "../../components/AddToFavoritesButton/AddToFavoritesButton";
import { ActorContext } from "../../../context/ActorContext";
import globalStyles from "../../../styles/globalStyles";

const ActorDetails = () => {
	const [castFeatures, setCastFeatures] = useState([]);
	const [crewFeatures, setCrewFeatures] = useState([]);

	const { actorSelected } = useContext(ActorContext);

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

	useEffect(() => {
		fetchCastFeatureData(actorSelected.id);
		fetchCrewFeatureData(actorSelected.id);
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
	}, []);

	return (
		<SafeAreaView style={globalStyles.container}>
			<ScrollView>
				<Image
					source={{
						uri: actorSelected.image?.medium,
					}}
					style={styles.image}
				/>
				<View style={styles.doubleContainer}>
					<PersonInfo />
					<AddToFavoritesButton item={actorSelected} />
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
				<View>
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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
