import React, { useContext } from "react";
import { SafeAreaView } from "react-native";

import Form from "../../components/Form/Form";
import ActorCard from "../../components/ActorCard/ActorCard";
import { ActorContext } from "../../../context/ActorContext";
import globalStyles from "../../../styles/globalStyles";

const ActorsHome = ({ navigation }) => {
	const { setActorSelected } = useContext(ActorContext);

	const pressForActorDetails = (actor) => {
		setActorSelected(actor);
		navigation.navigate("ActorDetails");
	};

	return (
		<SafeAreaView style={globalStyles.container}>
			<Form name="actor" />
			<ActorCard pressForActorDetails={pressForActorDetails} />
		</SafeAreaView>
	);
};

export default ActorsHome;
