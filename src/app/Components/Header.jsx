"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "../i18n/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ lng, sticky = false }) {
  const [isSticky, setIsSticky] = useState(sticky);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);
  const { t } = useTranslation(lng);
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
  const order_link =
    lng == "en"
      ? "https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123"
      : "https://order.auto-china.com/configurations/x/xo/v15?ref=EFFECT&locale=de";
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const toggleLang = () => {
    setIsLangActive(!isLangActive);
  };
  const pathname = usePathname()
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
          <div className="lang-switch-wrap">
            <div className="lang-switch" onClick={toggleLang}>
              <i className="uil uil-english-to-chinese" />
              {lng == "en" ? "En" : "De"}
            </div>
            <div className={`lang ${isLangActive ? "active" : ""}`}>
            
              <Link href={pathname.replace(`/${lng}`, `/en`)}><p onClick={toggleLang}>English</p></Link>
              <Link href={pathname.replace(`/${lng}`, `/de`)}><p onClick={toggleLang}>German</p></Link>
            </div>
          </div>
        </div>
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="links">
          <a href="/" onClick={toggleMenu}>
            {t("header.navigation.0.text")}
          </a>
          <a href="/#specs" onClick={toggleMenu}>
            {t("header.navigation.1.text")}
          </a>
          <a href="https://shop.auto-china.com/" onClick={toggleMenu}>
            {t("header.navigation.2.text")}
          </a>
          <a href={order_link}>
            <button onClick={toggleMenu}>
              {" "}
              {t("header.navigation.3.text")}
            </button>
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
