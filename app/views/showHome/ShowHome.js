import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";

import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";

const ShowHome = ({ navigation }) => {
	const [showName, setShowName] = useState("");
	const [arrayOfShows, setArrayOfShows] = useState([]);

	useEffect(() => {
		const fetchShowData = async (show) => {
			const { data } = await axios(
				`http://api.tvmaze.com/search/shows?q=${show}`
			);
			setArrayOfShows(data);
		};

		fetchShowData(showName);
	}, [showName]);

	const pressForShowDetails = (data) =>
		navigation.navigate("ShowDetails", data);

	return (
		<SafeAreaView style={styles.container}>
			<Form setShowName={setShowName} />
			<Card shows={arrayOfShows} pressForShowDetails={pressForShowDetails} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
});

export default ShowHome;
