import { actions } from "../actions/actorActions";

const initialState = {
	actor: { data: [], error: "", loading: "" },
	castCredits: { data: [], error: "", loading: "" },
	crewCredits: { data: [], error: "", loading: "" },
	actorSelected: {},
};

const actorReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ACTOR_DATA:
			return {
				...state,
				actor: { loading: action.payload },
			};
		case actions.ACTOR_DATA_SUCCESS:
			return {
				...state,
				actor: { data: action.payload, loading: "" },
			};
		case actions.ACTOR_DATA_FAILURE:
			return {
				...state,
				actor: { error: action.payload, loading: "", data: [] },
			};
		case actions.ACTOR_SELECTED:
			return {
				...state,
				actorSelected: action.payload,
			};
		case actions.ACTOR_CAST_CREDITS:
			return {
				...state,
				castCredits: { loading: action.payload },
			};
		case actions.ACTOR_CAST_CREDITS_SUCCESS:
			return {
				...state,
				castCredits: { data: action.payload, loading: "" },
			};
		case actions.ACTOR_CAST_CREDITS_FAILURE:
			return {
				...state,
				castCredits: { error: action.payload, loading: "", data: [] },
			};
		case actions.ACTOR_CREW_CREDITS:
			return {
				...state,
				crewCredits: { loading: action.payload },
			};
		case actions.ACTOR_CREW_CREDITS_SUCCESS:
			return {
				...state,
				crewCredits: { data: action.payload, loading: "" },
			};
		case actions.ACTOR_CREW_CREDITS_FAILURE:
			return {
				...state,
				crewCredits: { error: action.payload, data: [], loading: "" },
			};
		default:
			return state;
	}
};

export default actorReducer;
