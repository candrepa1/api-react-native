import React, { useEffect, useState, useContext } from "react";
import { Text, View, Image, FlatList } from "react-native";
import axios from "axios";
import globalStyles from "../../../styles/globalStyles";
import { ShowContext } from "../../../context/ShowContext";

const Crew = () => {
	const [crew, setCrew] = useState([]);

	const { showSelected } = useContext(ShowContext);

	const fetchCrewData = async (id) => {
		const result = await axios(`http://api.tvmaze.com/shows/${id}/crew`);
		setCrew(result.data);
	};

	useEffect(() => {
		fetchCrewData(showSelected.id);
	}, []);

	return (
		<FlatList
			data={crew}
			key={"+"}
			style={globalStyles.extrasContainer}
			numColumns={2}
			keyExtractor={(item) => `${item.person.id}-${item.type}`}
			renderItem={({ item }) => (
				<View style={globalStyles.card}>
					<View style={globalStyles.imageContainer}>
						<Image
							source={{
								uri: item.person.image
									? item.person.image.medium
									: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
							}}
							style={globalStyles.image}
						/>
					</View>
					<View style={globalStyles.textContainer}>
						<Text style={globalStyles.castCrewName}>{item.type}</Text>
						<Text style={globalStyles.characterCrewName}>
							{item.person.name}
						</Text>
					</View>
				</View>
			)}
		/>
	);
};

export default Crew;
