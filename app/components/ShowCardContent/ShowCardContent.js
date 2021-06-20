import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../../styles/globalStyles";

const ShowCardContent = ({ item, pressForShowDetails }) => {
	return (
		<TouchableOpacity
			onPress={() => pressForShowDetails(item.show)}
			style={globalStyles.cardContentContainer}
		>
			<View style={globalStyles.cardContent}>
				{item.show.image && (
					<Image
						source={{
							uri: item.show.image.medium,
						}}
						style={globalStyles.cardContentImage}
					/>
				)}
				<View style={globalStyles.cardTextContainer}>
					<Text style={globalStyles.actorShowName}>{item.show.name}</Text>
					{item.show?.genres.map((genre, index) => (
						<Text key={index} style={globalStyles.cardContentText}>
							{genre}
						</Text>
					))}
					{item.show.rating.average && (
						<Text style={globalStyles.cardContentText}>
							Rating:{item.show.rating.average}
						</Text>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ShowCardContent;
