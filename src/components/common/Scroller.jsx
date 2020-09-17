import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./css/scroller.css";
import Tooltip from "./Tooltip";

const Scroller = ({ children, width = "100%" }) => {
  const [scroll, setScroll] = useState(0);
  const [max, setMax] = useState(0);
  const scroller = useRef();

  useEffect(() => {
    setScrollProps();
  }, []);

  const setScrollProps = () => {
    setTimeout(() => {
      scroller.current.scrollLeft = 0;
      setMax(scroller.current.scrollWidth - scroller.current.clientWidth);
    }, 0);
  };

  const scrollLeft = () => {
    scroller.current.scrollLeft -= 300;
    setScroll(scroller.current.scrollLeft);
  };

  const scrollRight = () => {
    scroller.current.scrollLeft += 330;
    setScroll(scroller.current.scrollLeft);
  };

  return (
    <div className="scroller">
      <div className={scroll === 0 ? "hideBtn" : "scroller__btnContainer"}>
        <Tooltip tooltip="Previous">
          <button
            onClick={scrollLeft}
            className={
              scroll === 0 ? "hideBtn" : "scroller__btnInvisible showBtn"
            }
          >
            <ArrowBackIosIcon className="scroller__button" />
          </button>
        </Tooltip>
      </div>
      <div ref={scroller} id="child" style={{ width }}>
        {children}
      </div>
      <div className={scroll >= max ? "hideBtn" : "scroller__btnContainer"}>
        <Tooltip tooltip="Next">
          <button
            onClick={scrollRight}
            className={
              scroll >= max ? "hideBtn" : "scroller__btnInvisible showBtn"
            }
          >
            <ArrowForwardIosIcon className="scroller__button" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Scroller;
