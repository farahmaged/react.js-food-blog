import React from "react";
import styles from "../assets/styles/Food.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Image imports
import beefVegetables from "../assets/images/beefVegetables.jpg";
import spaghetti from "../assets/images/spaghettiBolognese.jpg";
import salmon from "../assets/images/salmon.jpg";

export default function Food() {
  return (
    <>
      <Navbar />
      <h6 className={styles.heading}>Food</h6>

      <section id="section1" className={styles.section}>
        <div className={styles.card}>
          <img src={beefVegetables} alt="Herb Crusted Steak & Vegetables" />
          <h2>Herb Crusted Steak & Vegetables</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className={styles.card}>
          <img src={spaghetti} alt="Creamy Spinach and Mushroom Spaghetti" />
          <h2>Creamy Spinach and Mushroom Spaghetti</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className={styles.card}>
          <img src={salmon} alt="Citrus Glazed Salmon" />
          <h2>Citrus Glazed Salmon</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
