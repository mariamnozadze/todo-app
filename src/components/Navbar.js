import React, { Component } from "react";

export class Navbar extends Component {
  render = () => (
    <div className="col-12">
      <h2 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s To Do List
      </h2>
    </div>
  );
}
