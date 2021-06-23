import axios from "axios";

export const actions = {
	SHOW_DATA: "SHOW_DATA",
	SHOW_DATA_SUCCESS: "SHOW_DATA_SUCCESS",
	SHOW_DATA_FAILURE: "SHOW_DATA_FAILURE",

	SHOW_CAST: "SHOW_CAST",
	SHOW_CAST_SUCCESS: "SHOW_CAST_SUCCESS",
	SHOW_CAST_FAILURE: "SHOW_CAST_FAILURE",

	SHOW_CREW: "SHOW_CREW",
	SHOW_CREW_SUCCESS: "SHOW_CREW_SUCCESS",
	SHOW_CREW_FAILURE: "SHOW_CREW_FAILURE",

	SHOW_EPISODES: "SHOW_EPISODES",
	SHOW_EPISODES_SUCCESS: "SHOW_EPISODES_SUCCESS",
	SHOW_EPISODES_FAILURE: "SHOW_EPISODES_FAILURE",

	SHOW_SELECTED: "SHOW_SELECTED",

	SHOW_PREVIOUS_EPISODE: "SHOW_PREVIOUS_EPISODE",
	SHOW_PREVIOUS_EPISODE_SUCCESS: "SHOW_PREVIOUS_EPISODE_SUCCESS",
	SHOW_PREVIOUS_EPISODE_FAILURE: "SHOW_PREVIOUS_EPISODE_FAILURE",
};

export const getShowData = () => {
	return {
		type: actions.SHOW_DATA,
		payload: "getting show data",
	};
};

export const getShowDataSuccess = (data) => {
	return {
		type: actions.SHOW_DATA_SUCCESS,
		payload: data,
	};
};

export const getShowDataFailure = (error) => {
	return {
		type: actions.SHOW_DATA_FAILURE,
		payload: error,
	};
};

export const getShowCast = () => {
	return {
		type: actions.SHOW_CAST,
		payload: "getting show cast",
	};
};

export const getShowCastSuccess = (data) => {
	return {
		type: actions.SHOW_CAST_SUCCESS,
		payload: data,
	};
};

export const getShowCastFailure = (error) => {
	return {
		type: actions.SHOW_CAST_FAILURE,
		payload: error,
	};
};

export const getShowCrew = () => {
	return {
		type: actions.SHOW_CREW,
		payload: "getting show crew",
	};
};

export const getShowCrewSuccess = (data) => {
	return {
		type: actions.SHOW_CREW_SUCCESS,
		payload: data,
	};
};

export const getShowCrewFailure = (error) => {
	return {
		type: actions.SHOW_CREW_FAILURE,
		payload: error,
	};
};

export const getShowEpisodes = () => {
	return {
		type: actions.SHOW_EPISODES,
		payload: "getting show episodes",
	};
};

export const getShowEpisodesSuccess = (data) => {
	return {
		type: actions.SHOW_EPISODES_SUCCESS,
		payload: data,
	};
};

export const getShowEpisodesFailure = (error) => {
	return {
		type: actions.SHOW_EPISODES_FAILURE,
		payload: error,
	};
};

export const showSelected = (data) => {
	return {
		type: actions.SHOW_SELECTED,
		payload: data,
	};
};

export const getPreviousEpisode = () => {
	return {
		type: actions.SHOW_CREW,
		payload: "getting previous episode",
	};
};

export const getPreviousEpisodeSuccess = (data) => {
	return {
		type: actions.SHOW_PREVIOUS_EPISODE_SUCCESS,
		payload: data,
	};
};

export const getPreviousEpisodeFailure = (error) => {
	return {
		type: actions.SHOW_PREVIOUS_EPISODE_FAILURE,
		payload: error,
	};
};

export function fetchShowData(showName) {
	return function (dispatch) {
		dispatch(getShowData());
		return axios(`http://api.tvmaze.com/search/shows?q=${showName}`)
			.then((response) => dispatch(getShowDataSuccess(response.data)))
			.catch((error) => dispatch(getShowDataFailure(error)));
	};
}

export function fetchShowCast(showId) {
	return function (dispatch) {
		dispatch(getShowCast());
		return axios(`http://api.tvmaze.com/shows/${showId}/cast`)
			.then((response) => dispatch(getShowCastSuccess(response.data)))
			.catch((error) => dispatch(getShowCastFailure(error)));
	};
}

export function fetchShowCrew(showId) {
	return function (dispatch) {
		dispatch(getShowCrew());
		return axios(`http://api.tvmaze.com/shows/${showId}/crew`)
			.then((response) => dispatch(getShowCrewSuccess(response.data)))
			.catch((error) => dispatch(getShowCrewFailure(error)));
	};
}

export function fetchShowEpisodes(showId) {
	return function (dispatch) {
		dispatch(getShowEpisodes());
		return axios(`http://api.tvmaze.com/shows/${showId}/episodes`)
			.then((response) => dispatch(getShowEpisodesSuccess(response.data)))
			.catch((error) => dispatch(getShowEpisodesFailure(error)));
	};
}

export function fetchPreviousEpisode(episodeLink) {
	return function (dispatch) {
		dispatch(getPreviousEpisode());
		return axios(episodeLink)
			.then((response) => dispatch(getPreviousEpisodeSuccess(response.data)))
			.catch((error) => dispatch(getPreviousEpisodeFailure(error)));
	};
}
