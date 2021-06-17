import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import axios from "axios";

import Form from "../../components/Form/Form";
import ActorCard from "../../components/ActorCard/ActorCard";

const ActorsHome = ({ navigation }) => {
	const [actorName, setActorName] = useState("");
	const [actors, setActors] = useState([]);

	useEffect(() => {
		const fetchActorData = async (actor) => {
			const { data } = await axios(
				`http://api.tvmaze.com/search/people?q=${actor}`
			);
			setActors(data);
		};

		fetchActorData(actorName);
	}, [actorName]);

	const pressForActorDetails = (data) =>
		navigation.navigate("ActorDetails", data);

	return (
		<SafeAreaView style={styles.container}>
			<Form setActorName={setActorName} showOrActor="an actor" />
			<ActorCard actors={actors} pressForActorDetails={pressForActorDetails} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
});

export default ActorsHome;
