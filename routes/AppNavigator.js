import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../app/views/home/Home";
import ShowDetails from "../app/views/showDetails/ShowDetails";
import Cast from "../app/views/cast/Cast";
import Episodes from "../app/views/episodes/Episodes";
import Crew from "../app/views/crew/Crew";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
	<Navigator headerMode="float">
		{/* //other options: "float", "screen", "none" */}
		<Screen name="Home" component={Home} />
		<Screen name="ShowDetails" component={ShowDetails} />
		<Screen name="Cast" component={Cast} />
		<Screen name="Episodes" component={Episodes} />
		<Screen name="Crew" component={Crew} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<HomeNavigator />
	</NavigationContainer>
);
