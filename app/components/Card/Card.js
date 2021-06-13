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

const Card = ({ shows, pressForShowDetails }) => {
	return (
		<FlatList
			data={shows}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={() => pressForShowDetails(item)}>
					<View style={styles.card}>
						{item.show.image && (
							<Image
								source={{
									uri: item.show.image.medium,
									width: "100%",
									height: 250,
								}}
								style={styles.image}
							/>
						)}

						<Text style={styles.text}>{item.show.name}</Text>
						<View>
							{item.show?.genres.map((genre) => (
								<Text style={styles.text}>{genre}</Text>
							))}
						</View>
						<Text style={styles.text}>Rating:{item.show.rating.average}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		backgroundColor: "#3e948b",
		borderRadius: 5,
		padding: 15,
		marginBottom: 20,
		justifyContent: "center",
		textAlign: "center",
	},
	text: {
		color: "white",
		// textTransform: "uppercase",
		fontSize: 30,
	},
	image: {
		borderRadius: 7,
	},
});

export default Card;
