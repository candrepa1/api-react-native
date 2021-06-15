import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";

const ShowHome = ({ navigation }) => {
	const [input, setInput] = useState("");
	const [arrayOfShows, setArrayOfShows] = useState([]);

	useEffect(() => {
		const fetchShowData = async (showName) => {
			const { data } = await axios(
				`http://api.tvmaze.com/search/shows?q=${showName}`
			);
			setArrayOfShows(data);
		};

		fetchShowData(input);
	}, [input]);

	const pressForShowDetails = (data) =>
		navigation.navigate("ShowDetails", data);

	return (
		<SafeAreaView style={styles.container}>
			<Form setInput={setInput} />
			<Card shows={arrayOfShows} pressForShowDetails={pressForShowDetails} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		// justifyContent: "center",
	},
	view: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "white",
		// textTransform: "uppercase",
		fontSize: 30,
	},
});

export default ShowHome;
