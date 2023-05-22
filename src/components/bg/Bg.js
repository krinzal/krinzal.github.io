import React, { useState } from "react";
import "./Bg.css";
import Main from "../main/Main";


 const Bg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [clicked, setClicked] = useState(false);

   const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleClick = () => {
    setAnimationComplete((prevState) => !prevState);
    toggleVisibility();
    setClicked((prevState) => !prevState);
  };

  return (
    <div>
      <div className={clicked ? "herodiv" : ""}>
        <canvas
          className={clicked ? "heroactive" : "hero"}
          style={{
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease",
            transform: isVisible ? "scale(1)" : "scale(1.1)",
          }}
        />
      </div>

      <div className="noisediv">
        <canvas
          id="noise"
          className={isVisible ? "noisevisible" : "noise"}
          style={
            {
              // // opacity: isVisible ? 0.3 : 0,
              // transform: isVisible ? "scale(1)" : "scale(1.1)",
              // transition: "opacity 0.5s ease-in-out, transform 0.5s ease",
            }
          }
        />
      </div>


      <div
        className="handler"
        style={{
          opacity: isVisible ? 1 : 0,
          transitionProperty: "opacity",
          transitionDuration: isVisible ? "2s" : "0s"
      
        }}
      ></div>

      <div
        onClick={handleClick}
        className="clickme"
        style={{
          display: animationComplete ? "none" : "block",
          animation: animationComplete
            ? "none"
            : "blink 1s ease-in-out infinite",
        }}
      >
        <p>Click here to continue</p>
      </div>

      {animationComplete && <Main toggleVisibility={toggleVisibility} click ={handleClick}/>}
    </div>
  );
};

export default Bg;