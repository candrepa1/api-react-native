import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import ActorsHome from "../app/views/actorsHome/ActorsHome";
import ShowHome from "../app/views/showHome/ShowHome";

const { Navigator, Screen } = createBottomTabNavigator();

export const HomeTabNavigator = () => (
	<Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === "Home") {
					iconName = focused
						? "ios-information-circle"
						: "ios-information-circle-outline";
				} else if (route.name === "Settings") {
					iconName = focused ? "ios-list-box" : "ios-list";
				}

				// You can return any component that you like here!
				return <MaterialIcons name="recent-actors" size={24} color="black" />;
			},
		})}
		tabBarOptions={{
			activeTintColor: "tomato",
			inactiveTintColor: "gray",
		}}
	>
		<Screen name="ShowsHome" component={ShowHome} />
		<Screen name="ActorsHome" component={ActorsHome} />
	</Navigator>
);
