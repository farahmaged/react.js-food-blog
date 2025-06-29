import React from "react";
import styles from "../assets/styles/BestRestaurants.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Image imports
import restaurant1 from "../assets/images/restaurant1.jpg";
import restaurant2 from "../assets/images/restaurant2.jpg";
import restaurant3 from "../assets/images/restaurant3.jpg";

export default function BestRestaurants() {
  return (
    <>
      <Navbar />
      <h6 className={styles.heading}>Best restaurants</h6>

      <section id="section2" className={styles.section}>
        <div className={styles.card}>
          <div className={styles.overlay}></div>
          <img src={restaurant1} alt="Savory Spoon Restaurant" />
          <div className={styles.textOverlay}>
            <a href="#">
              <p id={styles.firstRestaurant}>Savory Spoon Restaurant</p>
              <p className={styles.date}>June 18, 2023</p>
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.overlay}></div>
          <img src={restaurant2} alt="Urban Plates Brasserie" />
          <div className={styles.textOverlay}>
            <a href="#">
              <p>Urban Plates Brasserie</p>
              <p className={styles.date}>November 7, 2021</p>
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.overlay}></div>
          <img src={restaurant3} alt="Gourmet Grove Eatery" />
          <div className={styles.textOverlay}>
            <a href="#">
              <p>Gourmet Grove Eatery</p>
              <p className={styles.date}>March 25, 2022</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
