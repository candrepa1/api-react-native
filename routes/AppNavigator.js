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

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
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
		}}
	>
		<Screen name="ShowHome" component={HomeTabNavigator} />
		<Screen
			name="ShowDetails"
			component={ShowDetails}
			options={({ route }) => ({ title: route.params.show.name })}
		/>
		<Screen name="Cast" component={Cast} />
		<Screen name="Episodes" component={Episodes} />
		<Screen name="Crew" component={Crew} />

		<Screen name="ActorHome" component={ActorsHome} />
		<Screen
			name="ActorDetails"
			component={ActorDetails}
			options={({ route }) => ({ title: route.params.person.name })}
		/>
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<HomeNavigator />
	</NavigationContainer>
);
