import React, { useState } from "react";
import About from "./popups/about";
import Work from "./popups/work";
import "./main.css";
import Welc from "./Welc";
import "./font.css";
import Time from "./time";

const Main = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isWorkOpen, setWorkOpen] = useState(false);

  const handleaboutClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const openwork = () => {
    setWorkOpen(true);
  };

  const closework = () => {
    setWorkOpen(false);
  };

  return (
    <div className="main">
      <div className="welcwrap">
        <Welc />
      </div>

      <div className="mainwrap">
        <div className="about ye"></div>
        <div className="apps gen">
          <div className="app-icon work" onClick={openwork}>
            <i className="fa fa-folder fa-2x"></i>
            <span>Work</span>
          </div>
          <div className="clearfix"></div>
          <div className="app-icon about" onClick={handleaboutClick}>
            <i className="fa fa-user-circle fa-2x"></i>
            <span>About</span>
          </div>
          <div className="clearfix"></div>
          <div className="app-icon contact">
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-envelope fa-2x"></i>
              <span>Contact</span>
            </a>
          </div>
          <div className="clearfix"></div>
          <div className="app-icon trash">
            <i className="fa fa-trash fa-2x"></i>
            <span>Trash</span>
          </div>
        </div>
        <div className="apps social">
          <div className="app-icon social">
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-youtube fa-2x"></i>
              <span>Youtube</span>
            </a>
          </div>
          <div className="clearfix"></div>
          <div className="app-icon social">
            <a
              href="https://github.com/krin-zal"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-github fa-2x"></i>
              <span>Github</span>
            </a>
          </div>
          <div className="clearfix"></div>
          <div className="app-icon social">
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-reddit fa-2x"></i>
              <span>Reddit</span>
            </a>
          </div>
          <div className="clearfix"></div>
          <div className="app-icon social">
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-linkedin fa-2x"></i>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>

      <div className="timewrapper">
        <Time toggleVisibility={props.toggleVisibility} click={props.click} />
      </div>

      {isModalOpen && <About closeModal={handleCloseModal} />}
      {isWorkOpen && <Work closeModal={closework} />}
    </div>
  );
};

export default Main;
