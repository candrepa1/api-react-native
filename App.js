import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Home from "./app/views/home/Home";
import { AppNavigator } from "./routes/AppNavigator";

export default function App() {
	return (
		// <SafeAreaView style={styles.container}>
		// 	<Home />
		// </SafeAreaView>
		<AppNavigator />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		justifyContent: "center",
	},
});
