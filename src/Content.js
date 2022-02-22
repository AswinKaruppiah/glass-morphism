import React, { useEffect } from "react";
import "./Content.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Fruitimg from "./—Pngtree—lychee fruit cartoon lychee red_3814195.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { SmoothProvider } from "react-smooth-scrolling";

function Content() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div className="fruitscon">
        <h1 data-aos="fade-up">Fruits</h1>
        <p data-aos="fade-right">
          In order to maintain a healthy lifestyle, it is imperative to consume
          a balanced diet. A balanced diet consists of a mix of nutritious
          vegetables and fruits. Fruits are a powerhouse of various nutrients.
          Not only are they loaded with fibre content, but also contain various
          vitamins and minerals that can do wonders for our overall health.
          Consumption of fruits can keep a host of diseases at bay. They can
          also help you shed some extra kilos. Why you ask? Because of their
          great range of fibres that aid weight loss. When it comes to fruits,
          one fruit can be nutritionally superior to another.
        </p>
        <button data-aos="zoom-in" className="btn">
          <span>
            <a href="https://ansio.in/" target={"block"}>
              Shop
            </a>
          </span>
          <ChevronRightOutlinedIcon sx={{ fontSize: 40 }} />
        </button>
        <div className="imagef">
          <div>
            <img data-aos="zoom-in" className="imgitem" src={Fruitimg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
