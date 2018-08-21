import * as React from "react";
import { Pages } from "../../types/index";

interface HomeProps {
  onNavigate:(page:Pages) => void;
}

export default class Home extends React.Component<HomeProps, {}> {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, odit magnam? Placeat ea quis totam eveniet cum voluptatibus voluptatum odit ab earum. Temporibus, cum id error enim eum animi eligendi!</p>
        <button onClick={this.props.onNavigate.bind(null, "workout")}>Workout</button>
      </div>
    );
  }
}
