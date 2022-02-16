import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../styles/Footer.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  // Dropdown States
  const [adviceState, setAdviceState] = useState(false);
  const [servicesState, setServicesState] = useState(false);
  const [aboutState, setAboutState] = useState(false);
  console.log(servicesState);

  // Get current Window Width
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const screenSize = useWindowSize();
  const isSmallScreen = screenSize.width < 1024;

  // Get Current Year
  const years = new Date();
  let currentYear = years.getFullYear();

  return (
    <footer className={Styles.footer}>
      {/* footer Menu */}
      <section className={Styles.top}>
        {/* Advice  */}
        <div className={`${Styles.advice} ${Styles.borders}`}>
          <div
            className={`${Styles.dropdown}`}
            onClick={() => isSmallScreen && setAdviceState(!adviceState)}
          >
            <p className={Styles.title}>Beratung</p>
            <span
              className={`${Styles.arrow} ${
                adviceState ? Styles.arrow_active : ""
              }`}
            >
              <FaArrowAltCircleDown />
            </span>
          </div>
          <ul className={`${Styles.list} ${adviceState ? Styles.active : ""}`}>
            <li>Kaufberatung</li>
            <li>Probefahrt buchen</li>
          </ul>
        </div>

        {/* Service  */}
        <div className={`${Styles.service} ${Styles.borders}`}>
          <div
            className={Styles.dropdown}
            onClick={() => isSmallScreen && setServicesState(!servicesState)}
          >
            <p className={Styles.title}>Service</p>

            <span
              className={`${Styles.arrow} ${
                servicesState ? Styles.arrow_active : ""
              }`}
            >
              <FaArrowAltCircleDown />
            </span>
          </div>
          <ul
            className={`${Styles.list} ${servicesState ? Styles.active : ""}`}
          >
            <li>Service Termin Vereinbaren</li>
            <li>Technischer Support</li>
          </ul>
        </div>
        {/* About */}
        <div className={`${Styles.about} ${Styles.borders}`}>
          <div
            className={Styles.dropdown}
            onClick={() => isSmallScreen && setAboutState(!aboutState)}
          >
            <p className={Styles.title}>Über Uns</p>

            <span
              className={`${Styles.arrow} ${
                aboutState ? Styles.arrow_active : ""
              }`}
            >
              <FaArrowAltCircleDown />
            </span>
          </div>
          <ul className={`${Styles.list} ${aboutState ? Styles.active : ""}`}>
            <li>Kontakt Us</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </section>

      {/* Social Media */}
      <section className={Styles.bottom}>
        <div className={Styles.social}>
          <Link href="https://facebook.com">
            <a className={Styles.icon} target="_blank">
              <FaFacebookSquare className={Styles.facebook} />
            </a>
          </Link>
          <Link href="https://twitter.com">
            <a className={Styles.icon} target="_blank">
              <FaTwitterSquare className={Styles.twitter} />
            </a>
          </Link>
          <Link href="https://instagram.com/">
            <a className={Styles.icon_instagram} target="_blank">
              <FaInstagram />
            </a>
          </Link>
        </div>
        {/* Notes */}
        <div className={Styles.notes}>
          <p>Datenschutz</p>
          <p>Rechtliche Hinweis</p>
        </div>
        {/* Current Year */}
        <div className={Styles.rights}>
          <p className="text-center">&copy; {currentYear}</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
