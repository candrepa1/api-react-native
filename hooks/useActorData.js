import React, { useState } from "react";
import axios from "axios";

const useActorData = () => {
	const [actorResults, setActorResults] = useState([]);
	const [actorError, setActorError] = useState("");
	const [actorSelected, setActorSelected] = useState({});

	const fetchActorData = async (actorName) => {
		try {
			const { data } = await axios(
				`http://api.tvmaze.com/search/people?q=${actorName}`
			);
			setActorResults(data);
		} catch (e) {
			setActorError(e.message);
		}
	};

	return {
		actorError,
		actorResults,
		fetchActorData,
		setActorSelected,
		actorSelected,
	};
};

export default useActorData;
