import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "./../../constants";
import TaskList from "./../../components/TaskList";
import TaskForm from "./../../components/TaskForm";
// import PropTypes from 'prop-types';
const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0
  },
  {
    id: 2,
    title: "Play football",
    description: "With my friends",
    status: 1
  },
  {
    id: 3,
    title: "Play game",
    description: "Alone ",
    status: 2
  }
];

class Taskboard extends Component {
  state = {
    open: false
  };

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return (
            <TaskList tasks={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  addNewTask = () => {
    this.setState({
      open: true
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let text = null;
    text = <TaskForm open={open} onClose={this.handleClose} />;
    return text;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.addNewTask}
        >
          <AddIcon /> Add new tasks
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

// Taskboard.prototype = {
//   classes : PropTypes.object
// }

export default withStyles(styles)(Taskboard);
