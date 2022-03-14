import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";

function Navbar({ setIsOpen, isOpen }) {
  function useClickHandler(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          event.target.tagName !== "path" &&
          event.target.tagName !== "svg"
        ) {
          setIsOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useClickHandler(wrapperRef);

  return (
    <nav
      ref={wrapperRef}
      className={`bg-gradient-to-b from-indigo-200 to-gray-200 ${styles.nav} ${
        isOpen && styles.active
      } `}
    >
      <IoClose
        onClick={() => setIsOpen(false)}
        className={styles.nav__closeIcon}
      />

      <ul className={styles.nav__content}>
        <Link href="/">
          <a>Modelle</a>
        </Link>
        <Link href="/">
          <a>Kontakt</a>
        </Link>
        <Link href="/">
          <a>Services</a>
        </Link>
        <Link href="/">
          <a>Über Uns</a>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
