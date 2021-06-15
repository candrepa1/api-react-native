import React, { useEffect, useState } from "react";
import {
	Text,
	Image,
	FlatList,
	View,
	SafeAreaView,
	StyleSheet,
	ScrollView,
} from "react-native";
import axios from "axios";
import PersonInfo from "../../components/PersonInfo/PersonInfo";

const ActorDetails = ({ route }) => {
	const { id, name, country, birthday, image } = route.params.person;
	const [castFeatures, setCastFeatures] = useState([]);
	const [crewFeatures, setCrewFeatures] = useState([]);

	useEffect(() => {
		const fetchCastFeatureData = async (actorId) => {
			const { data } = await axios(
				`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`
			);
			setCastFeatures(data);
		};

		const fetchCrewFeatureData = async (actorId) => {
			const { data } = await axios(
				`http://api.tvmaze.com/people/${actorId}/crewcredits?embed=show`
			);
			console.log(data[0]);
			setCrewFeatures(data);
		};

		fetchCastFeatureData(id);
		fetchCrewFeatureData(id);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text style={styles.title}>{name}</Text>
				<Image
					source={{ uri: image?.medium, width: 350, height: 350 }}
					style={styles.image}
				/>
				<PersonInfo country={country} birthday={birthday} />
				<Text style={styles.text}>Known For</Text>
				<Text style={styles.text}>CAST FEATURES</Text>
				<View>
					<FlatList
						data={castFeatures}
						keyExtractor={(item) => item._embedded.show.id.toString()}
						renderItem={({ item }) => (
							<>
								<Text style={styles.text}>{item._embedded.show.name}</Text>
								<Image
									source={{
										uri: item._embedded.show.image?.medium,
										width: 150,
										height: 150,
									}}
								/>
							</>
						)}
					/>
				</View>
				<Text style={styles.text}>CREW FEATURES</Text>
				<View>
					<FlatList
						data={crewFeatures}
						keyExtractor={(item) => `${item.type}-${item._embedded.show.id}`}
						renderItem={({ item }) => (
							<View>
								<Text style={styles.text}>{item.type}</Text>
								<Text style={styles.text}>{item._embedded.show.name}</Text>
							</View>
						)}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
	},
	text: {
		color: "white",
	},
	title: {
		color: "white",
		fontSize: 35,
	},
	image: {
		borderRadius: 8,
		marginVertical: 20,
	},
});

export default ActorDetails;
