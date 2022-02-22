import React from "react";
import Content from "./Content";
import "./Glass.css";
import Nav from "./Nav";

function glass() {
  return (
    <>
      <div className="hold">
        <div className="container">
          <Nav />
          <Content />
        </div>
      </div>
    </>
  );
}

export default glass;
