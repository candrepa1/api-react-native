import axios from "axios";

export const actions = {
	ACTOR_DATA: "ACTOR_DATA",
	ACTOR_DATA_SUCCESS: "ACTOR_DATA_SUCCESS",
	ACTOR_DATA_FAILURE: "ACTOR_DATA_FAILURE",

	ACTOR_CAST_CREDITS: "ACTOR_CAST_CREDITS",
	ACTOR_CAST_CREDITS_SUCCESS: "ACTOR_CAST_CREDITS_SUCCESS",
	ACTOR_CAST_CREDITS_FAILURE: "ACTOR_CAST_CREDITS_FAILURE",

	ACTOR_CREW_CREDITS: "ACTOR_CREW_CREDITS",
	ACTOR_CREW_CREDITS_SUCCESS: "ACTOR_CREW_CREDITS_SUCCESS",
	ACTOR_CREW_CREDITS_FAILURE: "ACTOR_CREW_CREDITS_FAILURE",

	ACTOR_SELECTED: "ACTOR_SELECTED",
};

export const getActorData = () => {
	return {
		type: actions.ACTOR_DATA,
		payload: "getting actor data",
	};
};

export const getActorDataSuccess = (data) => {
	return {
		type: actions.ACTOR_DATA_SUCCESS,
		payload: data,
	};
};

export const getActorDataFailure = (error) => {
	return {
		type: actions.ACTOR_DATA_FAILURE,
		payload: error,
	};
};
export const getActorCastFeature = () => {
	return {
		type: actions.ACTOR_CAST_CREDITS,
		payload: "getting actor cast feature",
	};
};

export const getActorCastFeatureSuccess = (data) => {
	return {
		type: actions.ACTOR_CAST_CREDITS_SUCCESS,
		payload: data,
	};
};

export const getActorCastFeatureFailure = (error) => {
	return {
		type: actions.ACTOR_CAST_CREDITS_FAILURE,
		payload: error,
	};
};

export const getActorCrewFeature = () => {
	return {
		type: actions.ACTOR_CREW_CREDITS,
		payload: "getting actor crew feature",
	};
};

export const getActorCrewFeatureSuccess = (data) => {
	return {
		type: actions.ACTOR_CREW_CREDITS_SUCCESS,
		payload: data,
	};
};

export const getActorCrewFeatureFailure = (error) => {
	return {
		type: actions.ACTOR_CREW_CREDITS_FAILURE,
		payload: error,
	};
};

export const actorSelected = (data) => {
	return {
		type: actions.ACTOR_SELECTED,
		payload: data,
	};
};

export function fetchActorData(actorName) {
	return function (dispatch) {
		dispatch(getActorData());
		return axios(`http://api.tvmaze.com/search/people?q=${actorName}`)
			.then((response) => dispatch(getActorDataSuccess(response.data)))
			.catch((error) => dispatch(getActorDataFailure(error)));
	};
}

export function fetchActorCastFeature(actorId) {
	return function (dispatch) {
		dispatch(getActorCastFeature());
		return axios(
			`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`
		)
			.then((response) => dispatch(getActorCastFeatureSuccess(response.data)))
			.catch((error) => dispatch(getActorCastFeatureFailure(error)));
	};
}

export function fetchActorCrewFeature(actorId) {
	return function (dispatch) {
		dispatch(getActorCrewFeature());
		return axios(
			`http://api.tvmaze.com/people/${actorId}/crewcredits?embed=show`
		)
			.then((response) => dispatch(getActorCrewFeatureSuccess(response.data)))
			.catch((error) => dispatch(getActorCrewFeatureFailure(error)));
	};
}
