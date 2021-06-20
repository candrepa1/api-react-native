import React, { useContext } from "react";
import {
	Text,
	StyleSheet,
	View,
	Image,
	ScrollView,
	SafeAreaView,
} from "react-native";
import PreviousEpisode from "../../components/PreviousEpisode/PreviousEpisode";
import ShowInfoCard from "../../components/ShowInfoCard/ShowInfoCard";
import AddToFavoritesButton from "../../components/AddToFavoritesButton/AddToFavoritesButton";
import FlatButton from "../../components/FlatButton/FlatButton";
import { ShowContext } from "../../../context/ShowContext";
import globalStyles from "../../../styles/globalStyles";
import useUtilFunctions from "../../../hooks/useUtilFunctions";

const ShowDetails = ({ navigation }) => {
	const { showSelected } = useContext(ShowContext);
	const { stripHtml } = useUtilFunctions();

	return (
		<SafeAreaView style={globalStyles.container}>
			<ScrollView>
				<View style={styles.imageAndButtonsContainer}>
					<Image
						style={styles.image}
						source={{ uri: showSelected.image.medium }}
					/>
					<View style={styles.buttonsContainer}>
						<AddToFavoritesButton item={showSelected} />
						<FlatButton
							text="Cast"
							onPress={() => navigation.navigate("Cast")}
						/>
						<FlatButton
							text="Crew"
							onPress={() => navigation.navigate("Crew")}
						/>
						<FlatButton
							text="Episodes"
							onPress={() => navigation.navigate("Episodes")}
						/>
					</View>
				</View>
				<Text style={styles.summary}>{stripHtml(showSelected.summary)}</Text>
				<ShowInfoCard />
				<PreviousEpisode />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	imageAndButtonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
	},
	image: {
		borderRadius: 7,
		resizeMode: "contain",
		width: "60%",
		height: 250,
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
