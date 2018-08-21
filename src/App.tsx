import * as React from "react";
import Home from "./home/components/Home";
import Workout from "./workout/components/Workout";
import { Pages } from "./types/index";

interface AppProps {}

interface AppState {
  page:Pages
}

export default class App extends React.Component<AppProps, {}> {
  public state:AppState = {
    page: "home"
  }

  constructor (props:AppProps) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
  }

  public handleNavigation (page:Pages) {
    this.setState({
      page
    });
  }

  public render() {
    switch (this.state.page) {
      case "workout":
        return <Workout onNavigate={this.handleNavigation} />
      case "home":
      default:
        return <Home onNavigate={this.handleNavigation} />
    }
  }
}
