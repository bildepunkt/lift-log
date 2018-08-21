import * as React from "react";
import { Pages } from "../../types/index";

interface WorkoutProps {
  onNavigate:(page:Pages) => void;
}

export default class Workout extends React.Component<WorkoutProps, {}> {
  render () {
    return (
      <div>
        <h1>Workout</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, odit magnam? Placeat ea quis totam eveniet cum voluptatibus voluptatum odit ab earum. Temporibus, cum id error enim eum animi eligendi!</p>
        <button onClick={this.props.onNavigate.bind(null, "home")}>Home</button>
      </div>
    );
  }
}
