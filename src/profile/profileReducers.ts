import Api from "../common/Api";
import ProfileState from "./ProfileState";
import { Action } from "../types/index";
import { actionTypes, PROFILE_STATE_DATA } from "./profileConstants";


const init = (state:ProfileState):ProfileState => Api.GET(PROFILE_STATE_DATA) || state;

const reset = ():ProfileState => {
  Api.DELETE(PROFILE_STATE_DATA);
  return new ProfileState();
}

const save = (state:ProfileState):ProfileState => {
  Api.PUT(PROFILE_STATE_DATA, state);
  return state;
}

const profileReducers = (state:ProfileState = new ProfileState(), action:Action):ProfileState => {
  switch(action.type) {
    case actionTypes.PROFILE_INIT:
      return init(state);
    case actionTypes.PROFILE_RESET:
      return reset();
    case actionTypes.PROFILE_SAVE:
      return save(state);
    default: return state;
  }
}

export default profileReducers;
