import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
	showCardContainer: {
		flexDirection: "row",
		borderRadius: 7,
		margin: 10,
		justifyContent: "center",
		textAlign: "center",
	},

	buttonContainer: {
		flex: 1,
		width: "30%",
	},
	extrasContainer: {
		flex: 1,
		backgroundColor: "#000",
		padding: 10,
	},
});

export default globalStyles;
