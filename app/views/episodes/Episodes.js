import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import useUtilFunctions from "../../../hooks/useUtilFunctions";
import globalStyles from "../../../styles/globalStyles";

const Episodes = () => {
	const { stripHtml, formatDate } = useUtilFunctions();
	const episodes = useSelector((state) => state.show.episodes.data);
	const error = useSelector((state) => state.show.episodes.error);

	return (
		<>
			{error ? (
				<Text style={globalStyles.errorText}>
					There was an error, please try again.
				</Text>
			) : (
				<FlatList
					data={episodes}
					style={styles.container}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<View style={styles.card}>
							<Text style={styles.episodeTitle}>
								{item.season}x{item.number}: {item.name}
							</Text>
							<Text style={styles.text}>
								Airdate: {formatDate(item.airdate)}
							</Text>
							<Image
								source={{ uri: item?.image.medium }}
								style={styles.image}
							/>
							<Text style={styles.text}>{stripHtml(item.summary)}</Text>
						</View>
					)}
				/>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		padding: 10,
	},
	card: {
		borderRadius: 5,
		marginRight: 20,
		marginBottom: 20,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		paddingBottom: 20,
	},
	episodeTitle: {
		color: "white",
		fontSize: 30,
	},
	text: {
		color: "white",
		fontSize: 20,
		textAlign: "justify",
	},
	image: {
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		marginVertical: 10,
	},
});

export default Episodes;
