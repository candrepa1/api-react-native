import React, { createContext } from "react";
import useActorData from "../hooks/useActorData";

export const ActorContext = createContext();

export const ActorProvider = ({ children }) => {
	const actor = useActorData();
	return (
		<ActorContext.Provider value={actor}>{children}</ActorContext.Provider>
	);
};
