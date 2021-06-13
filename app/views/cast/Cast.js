import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Text,
	StyleSheet,
	TextInput,
	View,
	Button,
	Image,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";

const Cast = ({ route }) => {
	const { showId } = route.params;
	const [cast, setCast] = useState([]);

	useEffect(() => {
		const fetchCastData = async (id) => {
			const result = await axios(`http://api.tvmaze.com/shows/${id}/cast`);
			console.log(result.data[0]);
			setCast(result.data);
		};
		fetchCastData(showId);
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.text}>CAST</Text>
				<FlatList
					data={cast}
					renderItem={({ item }) => {
						return (
							<View style={styles.card}>
								<Image
									source={{
										uri: item?.character.image.medium,
										width: 150,
										height: 150,
									}}
								/>
								<Text>{item?.person.name}</Text>
								<Text>as {item?.character.name}</Text>
							</View>
						);
					}}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3f3f3f",
		alignItems: "center",
		// justifyContent: "center",
	},
	card: {
		backgroundColor: "#3e948b",
		borderRadius: 5,
		padding: 15,
		marginBottom: 20,
		justifyContent: "center",
		textAlign: "center",
	},
	text: {
		color: "white",
		fontSize: 30,
	},
});

export default Cast;
