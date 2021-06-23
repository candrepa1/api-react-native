import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ShowCardContent from "../ShowCardContent/ShowCardContent";

const ShowCard = ({ pressForShowDetails }) => {
	const shows = useSelector((state) => state.show.show.data);

	return (
		<FlatList
			data={shows}
			keyExtractor={(item) => item.show.id.toString()}
			renderItem={({ item }) => (
				<ShowCardContent
					item={item}
					pressForShowDetails={pressForShowDetails}
				/>
			)}
		/>
	);
};

export default ShowCard;
