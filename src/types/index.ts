import { ProfileState } from "../profile/profileReducers";

export interface Action {
  type:string;
  [key:string]:any;
}

export interface PageProps {
  onNavigate:(page:Pages) => void;
  profile:ProfileState;
}

export type Pages = "home"|"workout";
