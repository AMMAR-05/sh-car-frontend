import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Navbar from "./Navbar";
import { IoCarSport } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar state when clicking on burger menu icon
  const BurgerMenuHandler = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.header__left} ${styles.header__content}`}>
        <div className={styles.burger_menu} onClick={BurgerMenuHandler}>
          <GiHamburgerMenu
            className={`${styles.headerIcon} ${styles.burger_headerIcon}`}
          />
        </div>
        <Link href="/">
          <a>
            <IoCarSport className={styles.headerIcon} />
          </a>
        </Link>
      </div>

      <Link href="/">
        <a>
          <p className="">SH CAR</p>
        </a>
      </Link>

      <div className={`${styles.header__right} ${styles.header__content}`}>
        <Link href="/">
          <a>
            <AiFillStar className={styles.headerIcon} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BsPersonFill className={styles.headerIcon} />
          </a>
        </Link>
      </div>

      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}

export default Header;
