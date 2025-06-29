import React from "react";
import styles from "../assets/styles/Drinks.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import lemonLime from "../assets/images/lemonLimeBreeze.jpg";
import chocoCcino from "../assets/images/chococcinoDelight.jpg";
import berrylicious from "../assets/images/berryliciousSunsetSip.jpg";

export default function Drinks() {
  const drinks = [
    {
      image: lemonLime,
      title: "Lemon-lime Breeze",
      description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      image: chocoCcino,
      title: "Choco-ccino Delight",
      description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      image: berrylicious,
      title: "Berrylicious Sunset Dip",
      description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
  ];

  return (
    <>
      <Navbar />

      <h6 className={styles.sectionHeading}>Drinks</h6>
      <section id="section2" className={styles.section}>
        {drinks.map((item, index) => (
          <div className={styles.contentWrapper} key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
