import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ShowContext } from "../../../context/ShowContext";
import globalStyles from "../../../styles/globalStyles";
import ShowCardContent from "../ShowCardContent/ShowCardContent";

const ShowCard = ({ pressForShowDetails }) => {
	const { showResults } = useContext(ShowContext);

	return (
		<FlatList
			data={showResults}
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
