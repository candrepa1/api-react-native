import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShowDetails from "../app/views/showDetails/ShowDetails";
import Cast from "../app/views/cast/Cast";
import Episodes from "../app/views/episodes/Episodes";
import Crew from "../app/views/crew/Crew";
import { HomeTabNavigator } from "./TabNavigator";
import ActorsHome from "../app/views/actorsHome/ActorsHome";
import ActorDetails from "../app/views/actorDetails/ActorDetails";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import useShowData from "../hooks/useShowData";
import { useContext } from "react";
import { ShowContext } from "../context/ShowContext";
import { ActorContext } from "../context/ActorContext";

const { Navigator, Screen } = createStackNavigator();

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? "ShowHome";

	switch (routeName) {
		case "Shows":
			return "Shows";
		case "Actors":
			return "Actors";
		case "Favorites":
			return "Favorites";
	}
}

const HomeNavigator = () => {
	const { showSelected } = useContext(ShowContext);
	const { actorSelected } = useContext(ActorContext);

	return (
		<Navigator
			mode="modal"
			headerMode="float"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#000",
				},
				headerTitleStyle: {
					fontWeight: "bold",
					fontSize: 20,
				},
				headerTintColor: "tomato",
				headerBackTitleVisible: false,
				title: "Shows",
			}}
		>
			<Screen
				name="ShowHome"
				component={HomeTabNavigator}
				options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
			/>
			<Screen
				name="ShowDetails"
				component={ShowDetails}
				options={() => ({ headerTitle: showSelected.name })}
			/>
			<Screen
				name="Cast"
				component={Cast}
				options={() => ({ headerTitle: "Cast" })}
			/>
			<Screen
				name="Episodes"
				component={Episodes}
				options={() => ({ headerTitle: "Episodes" })}
			/>
			<Screen
				name="Crew"
				component={Crew}
				options={() => ({ headerTitle: "Crew" })}
			/>

			<Screen
				name="ActorDetails"
				component={ActorDetails}
				options={() => ({ headerTitle: actorSelected.name })}
			/>
		</Navigator>
	);
};

export const AppNavigator = () => (
	<NavigationContainer>
		<HomeNavigator />
	</NavigationContainer>
);
