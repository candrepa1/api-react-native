import React from "react";
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

const ShowInfoCard = ({ info }) => {
	return (
		<View style={styles.container}>
			<Text>Show Info</Text>
			<Text>Network: {info.network.name}</Text>
			<Text>
				Schedule:{" "}
				{info.schedule?.days.map((day) => (
					<Text>{day}s</Text>
				))}{" "}
				at {info.schedule?.time} ({info.runtime} min)
			</Text>
			<Text>Status: {info.status}</Text>
			<Text>Show Type: {info.type}</Text>
			<Text>
				Genres:{" "}
				{info?.genres.map((genre) => (
					<Text>{genre} | </Text>
				))}
			</Text>
			<Text>Official site: {info.officialSite}</Text>
			<Text>Rating: {info.rating.average}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f7f7f7",
		alignItems: "center",
		padding: 10,
		marginTop: 20,
	},
});

export default ShowInfoCard;
