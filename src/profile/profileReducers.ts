import { Action } from "../types/index";

export class ProfileState {}

const profileReducers = (state:ProfileState = new ProfileState(), action:Action) => {
  switch(action.type) {
    default: return state;
  }
}

export default profileReducers;
