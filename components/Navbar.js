import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar({ isOpen }) {
  return (
    <nav
      className={`bg-gradient-to-b from-indigo-200 to-gray-200 ${styles.nav} ${
        isOpen && styles.active
      }`}
    >
      <ul className={styles.nav__content}>
        <Link href="/">Home</Link>
        <Link href="/">Crypto</Link>
        <Link href="/">DeFi</Link>
        <Link href="/">NFT</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
