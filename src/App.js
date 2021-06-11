import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import NavbarComponent from "../src/components/Navbar.component";
import KeypadComponent from "./components/Keypad.component";
import InputComponent from "./components/Input.component";

function App() {
  return (
    <Router>
      <div className="">
        <NavbarComponent />
        <div className="container my-3">
          <InputComponent />
          <KeypadComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
