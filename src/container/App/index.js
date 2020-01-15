import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core";
import Taskboard from "./../Taskboard";
import { Provider } from "react-redux";
import configureStore from "../../redux/congifureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Taskboard />
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
