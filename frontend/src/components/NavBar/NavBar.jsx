import React from "react";
import "./NavBar.css";
import icon from "../Assets/cat_icon.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      // Perform search action here
      console.log("Search value:", event.target.value);
    }
  };
  return (
    <div className="navbar">
      <div className="icon">
        <Link style={{ textDecoration: "none", color: "#96969a", display: "flex", gap: "5px" }}>
          <img src={icon} alt="" />
          <p>Web Name</p>
        </Link>
      </div>
      <div className="search">
        <input type="text" onKeyPress={handleSearchKeyPress} placeholder="Type something" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none", color: "#96969a", display: "flex", gap: "5px" }}>NavTo</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "#96969a", display: "flex", gap: "5px" }}>NavTo</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "#96969a", display: "flex", gap: "5px" }}>NavTo</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "#96969a", display: "flex", gap: "5px" }}>NavTo</Link>
        </li>
      </ul>
      <div className="nav-user-controller">{localStorage.getItem("auth-token") ? (
          <div className="nav-user-controll">
            {/* <UserMenu /> */}
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="login-button">Login</button>
          </Link>
        )}</div>
    </div>
  );
};

export default NavBar;
