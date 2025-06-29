import React, { useState } from "react";
import styles from "../assets/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logo from "../assets/images/logo.jpg";
import heroImage from "../assets/images/heroImage.jpg";
import blackLogo from "../assets/images/blackLogo.jpg";

import img1 from "../assets/images/beefVegetables.jpg";
import img2 from "../assets/images/partyCocktails.jpg";
import img3 from "../assets/images/fruitSalad.jpg";

import rest1 from "../assets/images/restaurant1.jpg";
import rest2 from "../assets/images/restaurant2.jpg";
import rest3 from "../assets/images/restaurant3.jpg";

import pasta from "../assets/images/shrimpPasta.jpg";
import rolls from "../assets/images/cinammonRolls.jpg";
import pizza from "../assets/images/pizza.jpg";

import coffee from "../assets/images/coffee.jpg";

export default function Home() {
  const [email, setEmail] = useState("");

  const foodPosts = [
    {
      img: img1,
      title: "Herb Crusted Steak & Vegetables",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: img2,
      title: "10 Festive Drinks to Party With",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: img3,
      title: "Honey Lime Fruit Salad",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const topRestaurants = [
    {
      img: rest1,
      name: "Savory Spoon Restaurant",
      date: "June 18, 2023"
    },
    {
      img: rest2,
      name: "Urban Plates Brasserie",
      date: "November 7, 2021"
    },
    {
      img: rest3,
      name: "Gourmet Grove Eatery",
      date: "March 25, 2022"
    }
  ];

  const vlogs = [pasta, rolls, pizza];

  return (
    <>
      <Navbar />

      <section
        id="hero-section"
        className={styles.heroSection}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.heroContent}>
          <h6>Food, drinks & restaurants reviews</h6>
          <h1>Join our list 100,000+ Subscribers & stay updated!</h1>
          <input
            type="email"
            value={email}
            placeholder="Enter a valid email address.."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="submit"
            value="Subscribe now"
            onClick={() => setEmail("")}
          />
        </div>
      </section>

      <h6 className={styles.sectionHeading}>Most recent blog posts</h6>
      <section className={styles.section}>
        {foodPosts.map((post, idx) => (
          <div className={styles.contentWrapper} key={idx}>
            <img className={styles.postImage} src={post.img} alt={post.title} />
            <a href="#">
              <p className={styles.title}>{post.title}</p>
            </a>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        ))}
      </section>

      <h6 className={styles.sectionHeading}>Top rated restaurants to visit</h6>
      <section className={styles.section}>
        {topRestaurants.map((res, idx) => (
          <div className={styles.contentWrapper} key={idx}>
            <div className={styles.imageOverlay}></div>
            <img src={res.img} alt={res.name} />
            <div className={styles.textOverlay}>
              <a href="#">
                <p>{res.name}</p>
                <p className={styles.date}>{res.date}</p>
              </a>
            </div>
          </div>
        ))}
      </section>

      <h6 className={styles.sectionHeading}>Recommended review vlogs</h6>
      <section className={styles.videoSection}>
        {vlogs.map((vid, idx) => (
          <div className={styles.videoWrapper} key={idx}>
            <video width="385" height="250" poster={vid} controls>
              <source src="/videos/sample.mp4" type="video/mp4" />
            </video>
          </div>
        ))}
      </section>

      <section
        className={styles.ctaSection}
        style={{ backgroundImage: `url(${coffee})` }}
      >
        <h6>Are you a restaurant owner?</h6>
        <h2>
          Reach out to John Doe for a meaningful
          <br />
          review for your restaurant.
        </h2>
        <button>Get in touch</button>
      </section>

      <Footer />
    </>
  );
}
