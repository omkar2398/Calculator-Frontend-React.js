import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Calci extends Component {
  render() {
    return (
      <>
        <div className="row text-center my-4">
          <div className="col-lg-12">
            <div className="m-2">
              <Button variant="dark m-2"> C </Button>
              <Button variant="dark m-2"> % </Button>
              <Button variant="dark m-2"> Del </Button>
              <Button variant="dark m-2"> % </Button>
              <br />
            </div>
            <div className="m-2">
              <Button variant="dark m-2"> 7 </Button>
              <Button variant="dark m-2"> 8 </Button>
              <Button variant="dark m-2"> 9 </Button>
              <Button variant="dark m-2"> X </Button>
              <br />
            </div>
            <div className="m-2">
              <Button variant="dark m-2"> 4 </Button>
              <Button variant="dark m-2"> 5 </Button>
              <Button variant="dark m-2"> 6 </Button>
              <Button variant="dark m-2"> - </Button>
              <br />
            </div>
            <div className="m-2">
              <Button variant="dark m-2"> 1 </Button>
              <Button variant="dark m-2"> 2 </Button>
              <Button variant="dark m-2"> 3 </Button>
              <Button variant="dark m-2"> + </Button>
              <br />
            </div>
            <div className="m-2">
              <Button variant="dark m-2"> 0 </Button>
              <Button variant="dark m-2"> 00 </Button>
              <Button variant="dark m-2"> . </Button>
              <Button variant="dark m-2"> = </Button>
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}
