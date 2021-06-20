import React, { createContext } from "react";
import useShowData from "../hooks/useShowData";

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
	const show = useShowData();
	return <ShowContext.Provider value={show}>{children}</ShowContext.Provider>;
};
