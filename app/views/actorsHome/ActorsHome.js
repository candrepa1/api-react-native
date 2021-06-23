import React from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";

import Form from "../../components/Form/Form";
import ActorCard from "../../components/ActorCard/ActorCard";
import globalStyles from "../../../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
	actorSelected,
	fetchActorCastFeature,
	fetchActorCrewFeature,
} from "../../../redux/actions/actorActions";

const ActorsHome = ({ navigation }) => {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.actor.actor.error);
	const loading = useSelector((state) => state.actor.actor.loading);

	const pressForActorDetails = (actor) => {
		dispatch(actorSelected(actor));
		dispatch(fetchActorCastFeature(actor.id));
		dispatch(fetchActorCrewFeature(actor.id));
		navigation.navigate("ActorDetails");
	};

	return (
		<SafeAreaView style={globalStyles.container}>
			<Form name="actor" />
			{loading ? (
				<ActivityIndicator
					size="large"
					color="tomato"
					style={globalStyles.spinner}
				/>
			) : null}
			{error ? (
				<Text style={globalStyles.errorText}>
					There was an error, please try again.
				</Text>
			) : (
				<ActorCard pressForActorDetails={pressForActorDetails} />
			)}
		</SafeAreaView>
	);
};

export default ActorsHome;
