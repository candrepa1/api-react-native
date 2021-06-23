import React from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../components/Form/Form";
import ShowCard from "../../components/ShowCard/ShowCard";
import globalStyles from "../../../styles/globalStyles";
import {
	fetchPreviousEpisode,
	showSelected,
} from "../../../redux/actions/showActions";

const ShowHome = ({ navigation }) => {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.show.show.error);
	const loading = useSelector((state) => state.show.show.loading);

	const pressForShowDetails = (show) => {
		dispatch(showSelected(show));
		dispatch(fetchPreviousEpisode(show._links.previousepisode.href));
		navigation.navigate("ShowDetails");
	};

	return (
		<SafeAreaView style={globalStyles.container}>
			<Form name="show" />
			{loading ? (
				<ActivityIndicator
					size="large"
					color="tomato"
					style={globalStyles.spinner}
				/>
			) : null}
			{error ? (
				<Text style={globalStyles.errorText}>
					There was an error, please try again.
				</Text>
			) : (
				<ShowCard pressForShowDetails={pressForShowDetails} />
			)}
		</SafeAreaView>
	);
};

export default ShowHome;
