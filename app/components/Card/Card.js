import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";

const CardContent = ({ item, pressForShowDetails }) => {
	return (
		<TouchableOpacity onPress={() => pressForShowDetails(item)}>
			<View style={styles.showCardContainer}>
				{item.show.image && (
					<Image
						source={{
							uri: item.show.image.medium,
							width: 150,
							height: 150,
						}}
						style={styles.image}
					/>
				)}
				<View style={styles.cardText}>
					<Text style={styles.showName}>{item.show.name}</Text>
					{item.show?.genres.map((genre, index) => (
						<Text key={index} style={styles.text}>
							{genre}
						</Text>
					))}
					<Text style={styles.text}>Rating:{item.show.rating.average}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const Card = ({ shows, pressForShowDetails }) => {
	return (
		<FlatList
			style={styles.cardContainer}
			data={shows}
			keyExtractor={(item) => item.show.id.toString()}
			renderItem={({ item }) => (
				<CardContent item={item} pressForShowDetails={pressForShowDetails} />
			)}
		/>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		// width: "100%",
	},
	showCardContainer: {
		flexDirection: "row",
		// backgroundColor: "#3e948b",
		borderRadius: 7,
		marginTop: 20,
		paddingHorizontal: 17,
		alignItems: "center",
		// justifyContent: "center",
		// textAlign: "center",
	},
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "white",
		// textTransform: "uppercase",
		fontSize: 17,
	},
	image: {
		borderRadius: 7,
	},
	cardText: {
		marginLeft: 10,
		alignItems: "flex-start",
	},
	showName: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
	},
});

export default Card;
