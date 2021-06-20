import React, { useState } from "react";
import axios from "axios";

const useShowData = () => {
	const [showResults, setShowResults] = useState([]);
	const [showError, setShowError] = useState("");
	const [showSelected, setShowSelected] = useState({});

	const fetchShowData = async (showName) => {
		try {
			const { data } = await axios(
				`http://api.tvmaze.com/search/shows?q=${showName}`
			);
			setShowResults(data);
		} catch (e) {
			setShowError(e.message);
		}
	};

	return {
		showError,
		showResults,
		fetchShowData,
		setShowSelected,
		showSelected,
	};
};

export default useShowData;
