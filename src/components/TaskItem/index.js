import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
class TaskItem extends Component {
  render() {
    const { task, classes, status } = this.props;
    const { title } = task;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container direction="row" justify="space-between">
            <Grid item md={8}>
              {title}
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
