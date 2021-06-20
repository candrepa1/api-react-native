import React, { useContext } from "react";
import { SafeAreaView } from "react-native";

import Form from "../../components/Form/Form";
import { ShowContext } from "../../../context/ShowContext";
import ShowCard from "../../components/ShowCard/ShowCard";
import globalStyles from "../../../styles/globalStyles";

const ShowHome = ({ navigation }) => {
	const { setShowSelected } = useContext(ShowContext);

	const pressForShowDetails = (show) => {
		setShowSelected(show);
		navigation.navigate("ShowDetails");
	};

	return (
		<SafeAreaView style={globalStyles.container}>
			<Form name="show" />
			<ShowCard pressForShowDetails={pressForShowDetails} />
		</SafeAreaView>
	);
};

export default ShowHome;
