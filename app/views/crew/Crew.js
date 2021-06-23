import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../../../styles/globalStyles";

const Crew = () => {
	const crew = useSelector((state) => state.show.crew.data);
	const error = useSelector((state) => state.show.crew.error);

	return (
		<>
			{error ? (
				<Text style={globalStyles.errorText}>
					There was an error, please try again.
				</Text>
			) : (
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
			)}
		</>
	);
};

export default Crew;
