import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../assets/styles/Navbar.module.css";


import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="Food Blog Logo" />
      </Link>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/restaurants"
            className={location.pathname === "/restaurants" ? styles.active : ""}
          >
            Restaurants
          </Link>
        </li>
        <li>
          <Link
            to="/food"
            className={location.pathname === "/food" ? styles.active : ""}
          >
            Food
          </Link>
        </li>
        <li>
          <Link
            to="/drinks"
            className={location.pathname === "/drinks" ? styles.active : ""}
          >
            Drinks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
