import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const BurgerMenuHandler = () => setIsOpen(!isOpen);

  const renderIcon = isOpen ? (
    <XIcon className="h-10 w-10 " />
  ) : (
    <MenuIcon className="h-10 w-10 " />
  );

  return (
    <header className="h-20">
      <div className="absolute top-0 flex w-full justify-between align-middle p-0.5">
        <div
          className=" border-2 cursor-pointer z-50"
          onClick={BurgerMenuHandler}
        >
          {renderIcon}
        </div>
        <Link href="/">
          <a>
            <p className="">Start</p>
          </a>
        </Link>
        <Link href="/">
          <a>
            <p className="">Fahrzeuge</p>
          </a>
        </Link>
        <Link href="/">
          <a>
            <p className="">SH CAR</p>
          </a>
        </Link>
      </div>

      <Navbar isOpen={isOpen} />
    </header>
  );
}

export default Header;
