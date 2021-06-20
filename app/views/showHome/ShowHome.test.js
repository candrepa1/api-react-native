import React from "react";
import { create } from "react-test-renderer";
import ShowHome from "./ShowHome";
import { ShowContext } from "../../../context/ShowContext";
import { ActorContext } from "../../../context/ActorContext";

const setShowSelected = jest.fn();
const fetchShowData = jest.fn();
const fetchActorData = jest.fn();

const component = create(
	<ShowContext.Provider value={{ setShowSelected, fetchShowData }}>
		<ActorContext.Provider value={{ fetchActorData }}>
			<ShowHome />
		</ActorContext.Provider>
	</ShowContext.Provider>
);
console.log(component.toJSON());

it("should work", () => {
	// console.log(component);
	// expect(component.).toBe(1);
	expect(component.root.findByType("RCTSafeAreaView")).toBe(true);
});
