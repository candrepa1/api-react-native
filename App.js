import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppNavigator } from "./routes/AppNavigator";

export default function App() {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<AppNavigator />
		</TouchableWithoutFeedback>
	);
}
