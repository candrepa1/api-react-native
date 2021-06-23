import { actions } from "../actions/showActions";

const initialState = {
	show: { data: [], error: "", loading: "" },
	cast: { data: [], error: "", loading: "" },
	crew: { data: [], error: "", loading: "" },
	episodes: { data: [], error: "", loading: "" },
	previousEpisode: { data: [], error: "", loading: "" },
	showSelected: {},
};

const showReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SHOW_DATA:
			return {
				...state,
				show: { loading: action.payload },
			};
		case actions.SHOW_DATA_SUCCESS:
			return {
				...state,
				show: { data: action.payload, loading: "" },
			};
		case actions.SHOW_DATA_FAILURE:
			return {
				...state,
				show: { error: action.payload, data: [], loading: "" },
			};
		case actions.SHOW_CAST:
			return {
				...state,
				cast: { loading: action.payload },
			};
		case actions.SHOW_CAST_SUCCESS:
			return {
				...state,
				cast: { data: action.payload, loading: "" },
			};
		case actions.SHOW_CAST_FAILURE:
			return {
				...state,
				cast: { error: action.payload, data: [], loading: "" },
			};
		case actions.SHOW_CREW:
			return {
				...state,
				crew: { loading: action.payload },
			};
		case actions.SHOW_CREW_SUCCESS:
			return {
				...state,
				crew: { data: action.payload, loading: "" },
			};
		case actions.SHOW_CREW_FAILURE:
			return {
				...state,
				crew: { error: action.payload, data: [], loading: "" },
			};
		case actions.SHOW_EPISODES:
			return {
				...state,
				episodes: { loading: action.payload },
			};
		case actions.SHOW_EPISODES_SUCCESS:
			return {
				...state,
				episodes: { data: action.payload, loading: "" },
			};
		case actions.SHOW_EPISODES_FAILURE:
			return {
				...state,
				episodes: { error: action.payload, data: [], loading: "" },
			};
		case actions.SHOW_SELECTED:
			return {
				...state,
				showSelected: action.payload,
			};
		case actions.SHOW_PREVIOUS_EPISODE:
			return {
				...state,
				previousEpisode: { loading: action.payload },
			};
		case actions.SHOW_PREVIOUS_EPISODE_SUCCESS:
			return {
				...state,
				previousEpisode: { data: action.payload, loading: "" },
			};
		case actions.SHOW_PREVIOUS_EPISODE_FAILURE:
			return {
				...state,
				previousEpisode: { error: action.payload, loading: "", data: [] },
			};
		default:
			return state;
	}
};

export default showReducer;
