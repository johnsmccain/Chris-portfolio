import React from "react";
import "./sayhi.css";
import emoji from "../../assets/EMOJI.png";
export default function Sayhi() {
  return (
    <div className="sayhi">
      <h2>
        <div className="imbx">
          <img src={emoji} alt="smiley face" />
        </div>
        <span>I am glad you are here.</span> let's start the process of bringing
        your awesome ideas to life.
      </h2>
    </div>
  );
}
