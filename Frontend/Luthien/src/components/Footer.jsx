import styles from "./../styles/footer.module.css";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Logo from "./Logo";
import AOS from "aos";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <footer data-aos={"fade-up"} className={styles["footer"]}>
      <svg
        className={styles["footer-wave-svg"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          className={styles["footer-wave-path"]}
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <div className={styles["content"]}>
        <div className={styles["company"]}>
          <h2>Luthien</h2>
          <div className={styles["breaker-container"]}>
            <span></span>
            <span></span>
          </div>
          <Logo size={80} />
          <p>
            Lothien is a place where you can find your favorite hotel in the
            desired city with specific prices.
          </p>
        </div>
        <div className={styles["links"]}>
          <h2>Quick links</h2>
          <div className={styles["breaker-container"]}>
            <span></span>
            <span></span>
          </div>
          <div className={styles["link-container"]}>
            <NavLink>Get Started</NavLink>
            <NavLink>About</NavLink>
            <a href="#domestic-hotels">Domestic Hotels</a>
            <a href="#foreign-hotels">Foreign Hotels</a>
            <a href="#trending-dest">Trending Destinations</a>
          </div>
        </div>
        <div className={styles["get-started"]}>
          <h2>Get Started</h2>
          <div className={styles["breaker-container"]}>
            <span></span>
            <span></span>
          </div>
          <div className={styles["get-started-container"]}>
            <p>Lets get started to discover new hotels.</p>
            <NavLink className={styles["subscrib-nav"]} to={"/login"}>
              Subscrib Now
            </NavLink>
          </div>
        </div>
        <div className={styles["contact"]}>
          <h2>Contact Us</h2>
          <div className={styles["breaker-container"]}>
            <span></span>
            <span></span>
          </div>
          <div className={styles["contact-content"]}>
            <a href="gmail.google.com">info@gmail.com</a>
            <div>
              <a href="https://github.com/MohammadGhajari" target="_blank">
                <IoLogoGithub />
              </a>
              <a href="#">
                <IoLogoLinkedin />
              </a>
              <a href="https://t.me/m_ghajari" target="_blank">
                <FaTelegramPlane />
              </a>
              <a
                href="https://www.instagram.com/ghajari_mohammad29"
                target="_blank"
              >
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["copyright"]}>
        Copyright Luthien © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
