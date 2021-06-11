import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarComponent extends Component {
  today = { date: new Date() };

  render() {
    return (
      <>
        <div classname="container">
          <div className="bg-gray-800 text-white p-5">
            <p className="text-right">{this.today.date.toLocaleString()}</p>
          </div>
        </div>
      </>
    );
  }
}
