import { actionTypes } from "./profileConstants";
import ProfileState from "./ProfileState";

export const init = () => ({
  type: actionTypes.PROFILE_INIT
});

export const save = (state:ProfileState) => ({
  type: actionTypes.PROFILE_SAVE,
  state
});

export const reset = () => ({
  type: actionTypes.PROFILE_RESET
});
