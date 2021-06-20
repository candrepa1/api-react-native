import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActorContext } from "../../../context/ActorContext";
import globalStyles from "../../../styles/globalStyles";
import ActorCardContent from "../ActorCardContent/ActorCardContent";

const ActorCard = ({ pressForActorDetails }) => {
	const { actorResults } = useContext(ActorContext);
	return (
		<FlatList
			data={actorResults}
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
