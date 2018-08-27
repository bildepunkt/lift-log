import * as React from "react";
import { connect } from "react-redux";
import Home from "../home/Home";
import Workout from "../workout/Workout";
import * as profileActions from "../profile/profileActions";
import { Action, Pages } from "../types/index";

interface AppProps {
  profileState:any;
  dispatch:(...args:any[]) => Action;
}

interface AppState {
  page:Pages
}

export class App extends React.Component<AppProps, {}> {
  public state:AppState = {
    page: "home"
  }

  constructor (props:AppProps) {
    super(props);

    this._handleNavigation = this._handleNavigation.bind(this);
  }

  private _handleNavigation (page:Pages) {
    this.setState({ page });
  }

  public componentWillMount () {
    this.props.dispatch(profileActions.init());
  }

  public render() {
    const { profileState } = this.props;

    switch (this.state.page) {
      case "workout":
        return (
          <Workout
            onNavigate={this._handleNavigation}
            profile={profileState} />
        );
      case "home":
      default:
        return (
          <Home
            onNavigate={this._handleNavigation}
            profile={profileState} />
        );
    }
  }
}

export default connect((state:any) => ({
  profileState: state.profileReducers
}))(App);
