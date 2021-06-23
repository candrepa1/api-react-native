import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import actorReducer from "./reducers/actorReducer";
import showReducer from "./reducers/showReducer";

const store = createStore(
	combineReducers({ show: showReducer, actor: actorReducer }),
	applyMiddleware(thunk)
);

export default store;
