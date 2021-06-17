import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ActorsHome from "../app/views/actorsHome/ActorsHome";
import ShowHome from "../app/views/showHome/ShowHome";
import Favorites from "../app/views/favorites/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

export const HomeTabNavigator = () => (
	<Navigator
		tabBarOptions={{
			activeTintColor: "tomato",
			inactiveTintColor: "gray",
			style: {
				backgroundColor: "#15161B",
			},
			labelStyle: {
				fontSize: 13,
			},
		}}
	>
		<Screen
			name="Shows"
			component={ShowHome}
			options={{
				tabBarIcon: ({ size, color }) => (
					<Ionicons name="ios-film-outline" size={size} color={color} />
				),
			}}
		/>
		<Screen
			name="Actors"
			component={ActorsHome}
			options={{
				tabBarIcon: ({ size, color }) => (
					<Ionicons name="ios-body-outline" size={size} color={color} />
				),
			}}
		/>
		<Screen
			name="Favorites"
			component={Favorites}
			options={{
				tabBarIcon: ({ size, color }) => (
					<Ionicons name="ios-bookmark-outline" size={size} color={color} />
				),
			}}
		/>
	</Navigator>
);
