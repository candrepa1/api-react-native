import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppNavigator } from "./routes/AppNavigator";

export default function App() {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
}
