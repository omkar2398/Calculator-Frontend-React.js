import React, { Component } from "react";
import "../index.css";

export default class KeypadComponent extends Component {
  render() {
    return (
      <>
        <div className="flex justify-center">
          <div class="grid grid-cols-4 gap-4">
            <button className="col-span-2 bg-gray-900 p-4 text-white text-center">
              Clear
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              Del
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              /
            </button>

            <button className="bg-gray-900 p-4 text-white text-center">
              7
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              8
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              9
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              x
            </button>

            <button className="bg-gray-900 p-4 text-white text-center">
              4
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              5
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              6
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              -
            </button>

            <button className="bg-gray-900 p-4 text-white text-center">
              1
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              2
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              3
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              +
            </button>

            <button className="bg-gray-900 p-4 text-white text-center">
              0
            </button>
            <button className="bg-gray-900 p-4 text-white text-center">
              00
            </button>
            <button className="col-span-2 bg-gray-900 p-4 text-white text-center">
              =
            </button>
          </div>
        </div>
      </>
    );
  }
}
