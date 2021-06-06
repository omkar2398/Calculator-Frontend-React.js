import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "../src/components/Navbar.component";
import Calci from "../src/components/Calci.component";

function App() {
  return (
    <Router>
      <div className="">
        <NavbarComponent />
        <div className="container my-3">
          <Calci />
        </div>
      </div>
    </Router>
  );
}

export default App;
