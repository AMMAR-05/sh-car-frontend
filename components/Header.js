import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Header.module.css";
import Navbar from "./Navbar";
import { IoCarSportSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const BurgerMenuHandler = () => setIsOpen(!isOpen);

  return (
    <header className={Styles.header}>
      <div className={Styles.header__left}>
        <div className={Styles.burger__menu} onClick={BurgerMenuHandler}>
          <GiHamburgerMenu />
        </div>
        <Link href="/">
          <a>
            <IoCarSportSharp className={Styles.headerIcon} />
          </a>
        </Link>
      </div>

      <Link href="/">
        <a>
          <p>Sh Car</p>
        </a>
      </Link>
      <div className={Styles.header__right}>
        <Link href="/">
          <a>
            <BsFillPersonFill className={Styles.headerIcon} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <AiFillStar className={Styles.headerIcon} />
          </a>
        </Link>
      </div>

      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}

export default Header;
