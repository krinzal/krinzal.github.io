import React from "react";
import Draggable from "react-draggable";
import "../main.css";

const About = ({ closeModal }) => {
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
              <p>
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt mollitia exercitationem doloribus aliquid animi corporis harum possimus neque, voluptates provident, nihil facere est consectetur vel vero eaque hic, tempore sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ullam autem ducimus obcaecati harum. Tempora at adipisci aspernatur libero, a eligendi quaerat labore laboriosam atque earum veritatis aut, minima cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus odit possimus, repudiandae beatae inventore, voluptatibus asperiores quos ipsa veritatis vitae placeat molestiae odio non exercitationem minus magni? Tempora, fugiat! */}
                Hey Greetings, I'm <span>Krinzal</span>👋🏼, <br /><br /> I am a curious individual with a deep passion
                for learning new things. I find joy in exploring the enchanting world of music
                and coding. Striving for personal growth, my ultimate aspiration
                is to attain freedom in all aspects of life. While perfection
                eludes me, I'm committed to the pursuit of excellence. If you're
                seeking someone who embraces their imperfections and possesses a
                penchant for humor, I'm the one you're looking for! Let's embark
                on an exhilarating journey together and create something
                remarkable.
              </p>
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
            <p>
            Hey Greetings, I'm <span>Krinzal</span>👋🏼, <br /><br /> I am a curious individual with a deep passion
                for learning new things. I find joy in exploring the enchanting world of music
                and coding. Striving for personal growth, my ultimate aspiration
                is to attain freedom in all aspects of life. While perfection
                eludes me, I'm committed to the pursuit of excellence. If you're
                seeking someone who embraces their imperfections and possesses a
                penchant for humor, I'm the one you're looking for! Let's embark
                on an exhilarating journey together and create something
                remarkable.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
