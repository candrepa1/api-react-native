import React from "react";
import { ActorProvider } from "./context/ActorContext";
import { ShowProvider } from "./context/ShowContext";
import { AppNavigator } from "./routes/AppNavigator";

export default function App() {
	return (
		<ShowProvider>
			<ActorProvider>
				<AppNavigator />
			</ActorProvider>
		</ShowProvider>
	);
}
