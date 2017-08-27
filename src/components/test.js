import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Test extends Component {

  render() {
    return (
      <div>
        {JSON.stringify(this.props.users)};
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(Test);
