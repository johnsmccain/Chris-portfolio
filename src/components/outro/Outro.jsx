import React from "react";
import "./outro.css";
export default function Outro() {
  return (
    <div className="outro">
      <h2 className="outro-title ">
        Hey, Let's create magic together.{" "}
        <a href="mailto:" target="_blank" rel="noreferrer" className="small">
          shoot a mail
        </a>
      </h2>
      <p className="outro-lead mail">E-mail: mayormentechris@gmail.com</p>
    </div>
  );
}
