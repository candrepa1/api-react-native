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
		<TouchableOpacity
			onPress={() => pressForShowDetails(item)}
			style={{
				flexDirection: "row",
				marginTop: 10,
				flex: 1,
			}}
		>
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
			</View>
			<View style={styles.cardText}>
				<Text style={styles.showName}>{item.show.name}</Text>
				{item.show?.genres.map((genre, index) => (
					<Text key={index} style={styles.text}>
						{genre}
					</Text>
				))}
				{item.show.rating.average && (
					<Text style={styles.text}>Rating:{item.show.rating.average}</Text>
				)}
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
	showCardContainer: {
		borderRadius: 7,
		marginTop: 20,
		marginLeft: 17,
		flex: 0.4,
	},
	image: {
		borderRadius: 7,
	},
	cardText: {
		marginLeft: 10,
		flexDirection: "column",
		flex: 0.5,
		justifyContent: "center",
	},
	showName: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
		flexWrap: "wrap",
	},
	text: {
		color: "white",
		fontSize: 17,
	},
	cardContainer: {
		flex: 1,
	},
});

export default Card;
