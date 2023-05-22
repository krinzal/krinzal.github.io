import React from "react";
import Draggable from "react-draggable";
import "../main.css";
import soon from "./what.png";

const Work = ({ closeModal }) => {
  const handleDrag = (e, ui) => {
    // handle drag event if needed
  };

  // Get the current screen width
  const screenWidth = window.innerWidth;

  return (
    <div className="main">
      {screenWidth > 1015 ? (
        <Draggable handle=".modal-header" onDrag={handleDrag} bounds="parent">
          <div className="modal about">
            <div className="modal-header">
              <p className="window-title">About</p>
              <div className="button-wrap close" onClick={closeModal}>
                <i className="fa fa-times"></i>
              </div>
            </div>
            <div className="modal-content">
              <div class="window-body work-body">
                <div class="work-item">
                  <a href="http://???.com" target="_blank">
                    <img src={soon} alt="Work Image" />
                    <span class="name">???</span>
                    <span class="language one no-left-margin">???</span>
                  </a>
                </div>
                <div class="work-item">
                  <a href="http://???.com" target="_blank">
                    <img src={soon} alt="Work Image" />
                    <span class="name">???</span>
                    <span class="language one no-left-margin">???</span>
                  </a>
                </div>{" "}
                <div class="work-item">
                  <a href="http://???.com" target="_blank">
                    <img src={soon} alt="Work Image" />
                    <span class="name">???</span>
                    <span class="language one no-left-margin">???</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      ) : (
        <div className="modal about">
          <div className="modal-header">
            <p className="window-title">About</p>
            <div className="button-wrap close" onClick={closeModal}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="modal-content">
            <div class="window-body work-body">
              <div class="work-item">
                <a href="http://???.com" target="_blank">
                  <img src={soon} alt="Work Image" />
                  <span class="name">???</span>
                  <span class="language one no-left-margin">???</span>
                </a>
              </div>
              <div class="work-item">
                <a href="http://???.com" target="_blank">
                  <img src={soon} alt="Work Image" />
                  <span class="name">???</span>
                  <span class="language one no-left-margin">???</span>
                </a>
              </div>{" "}
              <div class="work-item">
                <a href="http://???.com" target="_blank">
                  <img src={soon} alt="Work Image" />
                  <span class="name">???</span>
                  <span class="language one no-left-margin">???</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
