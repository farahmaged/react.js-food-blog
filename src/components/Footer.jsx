import React from "react";
import styles from "../assets/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div id="social-media-icons">
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-youtube" />
      </div>
      <p>&copy; 2025 All Rights Reserved by Food Blog</p>
    </footer>
  );
}
