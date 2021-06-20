import React, { useEffect, useState, useContext } from "react";
import { Text, View, Image, FlatList } from "react-native";
import axios from "axios";
import globalStyles from "../../../styles/globalStyles";
import { ShowContext } from "../../../context/ShowContext";

const Cast = () => {
	const [cast, setCast] = useState([]);

	const { showSelected } = useContext(ShowContext);

	const fetchCastData = async (id) => {
		const result = await axios(`http://api.tvmaze.com/shows/${id}/cast`);
		setCast(result.data);
	};

	useEffect(() => {
		fetchCastData(showSelected.id);
	}, []);

	return (
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
							<Text style={globalStyles.castCrewName}>{item?.person.name}</Text>
							<Text style={globalStyles.characterCrewName}>
								as {item?.character.name}
							</Text>
						</View>
					</View>
				);
			}}
		/>
	);
};

export default Cast;
