import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [show, setshow] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className={show ? "menu" : "menu hide"}>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/meetme" className="link">
            Meet Me
          </Link>
        </li>
        <li>
          <Link to="/sayhi" className="link">
            Say Hi
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setshow(!show)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
