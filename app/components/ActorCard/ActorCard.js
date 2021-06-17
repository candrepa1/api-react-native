import React from "react";
import {
	FlatList,
	TouchableOpacity,
	View,
	Text,
	Image,
	StyleSheet,
} from "react-native";

const ActorCard = ({ actors, pressForActorDetails }) => {
	return (
		<FlatList
			data={actors}
			keyExtractor={(item) => item.person.id.toString()}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={() => pressForActorDetails(item)}>
					<View style={styles.container}>
						<Image
							source={{
								uri: item.person.image
									? item.person.image?.medium
									: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
								width: 150,
								height: 150,
							}}
							style={styles.image}
						/>
						<View style={styles.textContainer}>
							<Text style={styles.actorName}>{item.person.name}</Text>
							<Text style={styles.text}>{item.person.birthday}</Text>
							<Text style={styles.text}>{item.person.country?.name}</Text>
						</View>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "white",
		fontSize: 17,
	},
	container: {
		flexDirection: "row",
		marginTop: 20,
		paddingHorizontal: 17,
	},
	image: {
		borderRadius: 7,
	},
	textContainer: {
		marginLeft: 10,
		alignItems: "flex-start",
	},
	actorName: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
	},
});

export default ActorCard;
