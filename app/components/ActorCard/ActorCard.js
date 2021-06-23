import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ActorCardContent from "../ActorCardContent/ActorCardContent";

const ActorCard = ({ pressForActorDetails }) => {
	const actors = useSelector((state) => state.actor.actor.data);

	return (
		<FlatList
			data={actors}
			keyExtractor={(item) => item.person.id.toString()}
			renderItem={({ item }) => (
				<ActorCardContent
					item={item}
					pressForActorDetails={pressForActorDetails}
				/>
			)}
		/>
	);
};

export default ActorCard;
