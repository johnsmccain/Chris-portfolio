import React from "react";
import "./experience.css";
export default function Experience({ title, subTitle, date, details }) {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <h4>
        <span>{date}</span> {subTitle}
      </h4>
      <ul className="e-lists">
        {details?.map((detail) => (
          <li className="e-lead">{detail}</li>
        ))}
      </ul>
    </div>
  );
}
