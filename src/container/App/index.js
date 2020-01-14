import React, { Component } from "react";
import styles from "./styles.js";

import { withStyles } from "@material-ui/core";
import Taskboard from './../Taskboard'

class App extends Component {
  render() {
    return  (
      <div>
        <Taskboard /> 
      </div>
    )
  }
}

export default withStyles(styles)(App);
