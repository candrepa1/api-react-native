import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";

const Home = ({ navigation }) => {
	const [input, setInput] = useState("");
	const [arrayOfShows, setArrayOfShows] = useState([]);

	useEffect(() => {
		const fetchShowData = async (showName) => {
			const result = await axios(
				`http://api.tvmaze.com/search/shows?q=${showName}`
			);
			setArrayOfShows(result.data);
		};

		fetchShowData(input);
	}, [input]);

	const pressForShowDetails = (data) =>
		navigation.navigate("ShowDetails", data);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.view}>
				<ScrollView>
					<Text style={styles.text}>tv maze</Text>
					<Form setInput={setInput} />
					<Card
						shows={arrayOfShows}
						pressForShowDetails={pressForShowDetails}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		justifyContent: "center",
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

export default Home;
