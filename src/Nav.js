import React from "react";
import "./Nav.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Nav() {
  return (
    <>
      <div data-aos="fade-up" className="navbar">
        <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
        <h2>Shop</h2>

        <div className="navitem">
          <li className="item">aswin</li>
          <div class="vl"></div>
          <li className="item">help</li>
          <div class="vl"></div>
          <li className="item">others</li>
        </div>
      </div>
    </>
  );
}

export default Nav;
