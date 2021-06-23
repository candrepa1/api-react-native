import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import useUtilFunctions from "../../../hooks/useUtilFunctions";
import { useSelector } from "react-redux";
import globalStyles from "../../../styles/globalStyles";

const PreviousEpisode = () => {
	const episodeInfo = useSelector((state) => state.show.previousEpisode.data);
	const error = useSelector((state) => state.show.previousEpisode.error);
	const { stripHtml, formatDate } = useUtilFunctions();

	return (
		<View style={styles.container}>
			{error ? (
				<Text style={globalStyles.errorText}>
					There was an error, please try again.
				</Text>
			) : (
				<>
					<Text style={styles.title}>Previous Episode</Text>
					<View style={styles.secondContainer}>
						<Image
							source={{
								uri: episodeInfo.image
									? episodeInfo.image.medium
									: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
							}}
							style={styles.image}
						/>

						<View style={styles.episodeDescription}>
							<Text style={styles.episodeTitle}>{episodeInfo.name}</Text>
							<Text style={styles.description}>
								Episode {episodeInfo.season}x{episodeInfo.number};{" "}
								{formatDate(episodeInfo.airdate)}
							</Text>
							<Text style={styles.text}>{stripHtml(episodeInfo.summary)}</Text>
						</View>
					</View>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 15,
		marginHorizontal: 15,
		flex: 1,
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
	},
	title: {
		fontSize: 35,
		color: "white",
		marginBottom: 20,
		textAlign: "center",
	},
	secondContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "90%",
		height: 200,
	},
	episodeDescription: {
		marginLeft: 10,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	episodeTitle: {
		color: "white",
		fontSize: 25,
		fontWeight: "bold",
	},
	description: {
		color: "white",
		fontSize: 17,
		marginBottom: 20,
	},
	text: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
	},
});

export default PreviousEpisode;
