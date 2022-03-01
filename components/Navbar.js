import React, { useRef } from "react";
import Link from "next/link";
import Styles from "../styles/Navbar.module.css";
import { IoClose } from "react-icons/io5";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className={`${Styles.nav} ${isOpen && Styles.active}`}>
      <IoClose
        className={Styles.nav__closeIcon}
        onClick={() => setIsOpen(false)}
      />

      <ul className={Styles.nav__content}>
        <Link href="/">Modelle</Link>
        <Link href="/">Kontakt</Link>
        <Link href="/">Services</Link>
        <Link href="/">Über Uns</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
