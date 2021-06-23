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
				<Image
					source={{
						uri: item.show.image
							? item.show.image?.medium
							: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
					}}
					style={globalStyles.cardContentImage}
				/>
				<View style={globalStyles.cardTextContainer}>
					<Text style={globalStyles.actorShowName}>{item.show.name}</Text>
					{item.show?.genres.map((genre, index) => (
						<Text key={index} style={globalStyles.cardContentText}>
							{genre}
						</Text>
					))}
					{item.show.rating.average && (
						<Text style={globalStyles.cardContentText}>
							Rating: {item.show.rating.average}
						</Text>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ShowCardContent;
