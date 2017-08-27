import React, { Component } from "react";
import UserList from "./user_list";
import Test from "./test";

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList /><hr />
        <Test />
      </div>
    );
  }
}
