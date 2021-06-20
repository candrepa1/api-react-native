import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../../styles/globalStyles";

const ActorCardContent = ({ item, pressForActorDetails }) => {
	return (
		<TouchableOpacity
			onPress={() => pressForActorDetails(item.person)}
			style={globalStyles.cardContentContainer}
		>
			<View style={globalStyles.cardContent}>
				<Image
					source={{
						uri: item.person.image
							? item.person.image?.medium
							: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
					}}
					style={globalStyles.cardContentImage}
				/>
				<View style={globalStyles.cardTextContainer}>
					<Text style={globalStyles.actorShowName}>{item.person.name}</Text>
					<Text style={globalStyles.cardContentText}>
						{item.person.birthday}
					</Text>
					<Text style={globalStyles.cardContentText}>
						{item.person.country?.name}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ActorCardContent;
