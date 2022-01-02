import React from "react";
import "./project.css";
export default function Project({ img, title, text }) {
  return (
    <div className="project">
      <div className="p-wraper">
        <img src={img} alt="frame" />
        <h3 className="intro-title h3">{title}</h3>
        <p className="intro-lead">{text}</p>
      </div>
    </div>
  );
}
