import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import LoadingIcon from "../../assets/images/32x32.gif";
import { compose } from "redux";
import { connect } from "react-redux";
class Loading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.Loading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading
  };
};

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     uiActions: bindActionCreators(uiActions, dispatch)
//   };
// };

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(Loading);
