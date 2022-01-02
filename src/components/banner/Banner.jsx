import React from "react";
import "./banner.css";
import frame1 from "../../assets/Frame1.png";
export default function Banner() {
  return (
    <div className="banner">
      <img src={frame1} alt="frame" />
      <h3 className="intro-title h3">Colap clinic website design</h3>
      <p className="intro-lead">
        A website which is built to help health workers and HMO'S to kee track
        of their data's so as to eliminate the challenges of data history
        experienced in the health sector.
      </p>
    </div>
  );
}
