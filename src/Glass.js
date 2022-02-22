import React from "react";
import Content from "./Content";
import "./Glass.css";
import Nav from "./Nav";
import Photo from "./Photo";

function glass() {
  return (
    <>
      <div className="hold">
        <div className="container">
          <Nav />
          <Content />
          {/* <Photo /> */}
        </div>
      </div>
    </>
  );
}

export default glass;
