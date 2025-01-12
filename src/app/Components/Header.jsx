"use client";
import React, { useEffect, useState } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header
      className={`${isSticky ? "sticky" : ""} ${isMenuActive ? "active" : ""}`}
    >
      <div className="container">
        <div className="social">
          <a href="https://www.instagram.com/autochn">
            <i className="uil uil-instagram" />
          </a>
          <a href="https://youtube.com/@auto-chn">
            <i className="uil uil-youtube" />
          </a>
          <a href="https://wa.me/+971585728686">
            <i className="uil uil-whatsapp" />
          </a>
        </div>
        <div className="logo">
          <a href="index.html">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="links">
          <a href="#" onClick={toggleMenu}>
            Home
          </a>
          <a href="#specs" onClick={toggleMenu}>
            Specs
          </a>
          <a href="#contactus">
            <button onClick={toggleMenu}>Contact us</button>
          </a>
        </div>
        <div className="toogle-menu" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}

export default Header;
