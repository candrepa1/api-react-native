import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
	// general container
	container: {
		flex: 1,
		backgroundColor: "#000",
	},

	// buttons
	buttonContainer: {
		flex: 1,
		width: "30%",
	},

	// cast and crew
	extrasContainer: {
		flex: 1,
		backgroundColor: "#000",
		padding: 10,
	},
	card: {
		width: "48%",
		backgroundColor: "#f7f7f7",
		borderRadius: 5,
		marginRight: 20,
		marginBottom: 20,
	},
	imageContainer: {
		width: "100%",
	},
	image: {
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	textContainer: {
		marginVertical: 5,
		marginHorizontal: 5,
		flex: 1,
		justifyContent: "center",
	},
	castCrewName: {
		fontWeight: "bold",
		fontSize: 22,
	},
	characterCrewName: {
		fontSize: 17,
	},

	// card
	cardContentContainer: {
		flexDirection: "row",
	},
	cardContent: {
		flexDirection: "row",
		marginTop: 20,
		paddingHorizontal: 17,
		borderRadius: 7,
		flex: 1,
	},
	cardContentImage: {
		borderRadius: 7,
		width: 150,
		height: 150,
	},
	cardTextContainer: {
		marginLeft: 10,
		alignItems: "flex-start",
		flexShrink: 1,
	},
	actorShowName: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
		flexWrap: "wrap",
	},
	cardContentText: {
		color: "white",
		fontSize: 17,
	},

	// error messages
	errorText: {
		color: "red",
		marginVertical: 15,
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
	},

	// loading spinner
	spinner: {
		marginTop: 20,
	},
});

export default globalStyles;
