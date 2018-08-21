import { createStore, combineReducers } from "redux";
import profileReducers from "./profile/profileReducers";

const store = createStore(combineReducers({
  profileReducers
}));

export default store;
