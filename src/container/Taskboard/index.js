import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "./../../constants";
import TaskList from "./../../components/TaskList";
import TaskForm from "./../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";
// import PropTypes from 'prop-types';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionCreator } = this.props;
    const { fetchListTaskRequest } = taskActionCreator;
    fetchListTaskRequest();
  }

  state = {
    open: false
  };

  renderBoard = () => {
    const { listTask } = this.props;
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

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreator: bindActionCreators(taskActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
