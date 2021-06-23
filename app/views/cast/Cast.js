import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import globalStyles from "../../../styles/globalStyles";
import { useSelector } from "react-redux";

const Cast = () => {
	const cast = useSelector((state) => state.show.cast.data);
	const error = useSelector((state) => state.show.cast.error);

	return (
		<>
			{error ? (
				<Text style={globalStyles.errorText}>
					There was an error, please try again.
				</Text>
			) : (
				<FlatList
					data={cast}
					style={globalStyles.extrasContainer}
					key={"_"}
					numColumns={2}
					keyExtractor={(item) => item.person.id.toString()}
					renderItem={({ item }) => {
						return (
							<View style={globalStyles.card}>
								<View style={globalStyles.imageContainer}>
									<Image
										source={{
											uri: item?.character.image.medium,
										}}
										style={globalStyles.image}
									/>
								</View>
								<View style={globalStyles.textContainer}>
									<Text style={globalStyles.castCrewName}>
										{item?.person.name}
									</Text>
									<Text style={globalStyles.characterCrewName}>
										as {item?.character.name}
									</Text>
								</View>
							</View>
						);
					}}
				/>
			)}
		</>
	);
};

export default Cast;
