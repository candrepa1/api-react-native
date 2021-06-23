import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import AddToFavoritesButton from "../../components/AddToFavoritesButton/AddToFavoritesButton";
import globalStyles from "../../../styles/globalStyles";

const ActorDetails = () => {
	const state = useSelector((state) => state.actor);
	const actorSelected = useSelector((state) => state.actor.actorSelected);
	const castFeatures = useSelector((state) => state.actor.castCredits.data);
	const crewFeatures = useSelector((state) => state.actor.crewCredits.data);
	const castError = useSelector((state) => state.actor.castCredits.error);
	const crewError = useSelector((state) => state.actor.crewCredits.error);

	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
	}, []);

	return (
		<SafeAreaView style={globalStyles.container}>
			<ScrollView>
				<Image
					source={{
						uri: actorSelected.image
							? actorSelected.image?.medium
							: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
					}}
					style={styles.image}
				/>
				<View style={styles.doubleContainer}>
					<PersonInfo />
					<AddToFavoritesButton item={actorSelected} />
				</View>
				{crewError ? (
					<Text style={globalStyles.errorText}>
						There was an error, please try again.
					</Text>
				) : crewFeatures?.length ? (
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
				) : null}

				{castError ? (
					<Text style={globalStyles.errorText}>
						There was an error, please try again.
					</Text>
				) : (
					<>
						{castFeatures?.length ? (
							<>
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
							</>
						) : null}
					</>
				)}
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
