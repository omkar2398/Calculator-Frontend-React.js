import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div className="flex justify-center m-4">
        <div classname="grid grid-cols-4">
          <input className="bg-gray-200 p-4 w-full"></input>
        </div>
      </div>
    );
  }
}
