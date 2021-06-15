import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import axios from "axios";
import Form from "../../components/Form/Form";
import ActorCard from "../../components/ActorCard/ActorCard";

const ActorsHome = ({ navigation }) => {
	const [input, setInput] = useState("");
	const [actors, setActors] = useState([]);

	useEffect(() => {
		const fetchActorData = async (actor) => {
			const { data } = await axios(
				`http://api.tvmaze.com/search/people?q=${actor}`
			);
			setActors(data);
		};

		fetchActorData(input);
	}, [input]);

	const pressForActorDetails = (data) =>
		navigation.navigate("ActorDetails", data);

	return (
		<SafeAreaView style={styles.container}>
			<Form setInput={setInput} showOrActor="an actor" />
			<ActorCard actors={actors} pressForActorDetails={pressForActorDetails} />
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
});

export default ActorsHome;
