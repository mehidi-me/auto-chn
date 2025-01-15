"use client";
import SliderHome from "./SliderHome";
import Header from "./Header";
import Features from "./Features";
import FormContact from "./FormContact";


// import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "../i18n/client";
import Link from "next/link";
import Footer from "./Footer";


export default function Home() {
  const params = useParams();
  const { t } = useTranslation(params?.lng);

  useEffect(() => {
    async function animate() {
      const ScrollReveal = (await import("scrollreveal")).default;

      const sr = ScrollReveal({
        reset: false,
        distance: "60px",
        duration: 1200,
        delay: 30,
      });

      // Set up ScrollReveal for various elements
      sr.reveal("main .content h1", {
        delay: 10,
        origin: "bottom",
      });
      sr.reveal("main .content h2", {
        delay: 50,
        origin: "bottom",
      });
      sr.reveal("main .content button", {
        delay: 50,
        origin: "bottom",
      });
      sr.reveal(".title-1 h2", { delay: 10, origin: "bottom" });
      sr.reveal(".title-1 p", { delay: 50, origin: "bottom" });
      sr.reveal(".feature .ico", { delay: 30, origin: "left" });
      sr.reveal(".feature h5", { delay: 90, origin: "left" });
      sr.reveal(".form-card", { delay: 50, origin: "bottom" });
      sr.reveal("footer .wraper", { delay: 50, origin: "bottom" });
    }
    animate();
  }, []);

  const order_link =
    params?.lng == "en"
      ? "https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123"
      : "https://order.auto-china.com/configurations/x/xo/v15?ref=EFFECT&locale=de";

  return (
    <div>
      <Header t={t} lng={params.lng} />
      <main>
        <video src="/images/bg.mp4" className="bg" autoPlay loop muted />
        <div className="container">
          <div className="content">
            <center>
              <h1>
                {t("main.content.headline")} <br />
                <span>{t("main.content.sub_headline")}</span>
              </h1>
              <a href={order_link}>
                <button>
                  <i className="uil uil-shopping-bag" />{" "}
                  {t("main.content.button.text")}
                </button>
              </a>
            </center>
            <div className="cta">
              <a href="#contactus">
                <button className="line">
                  {t("main.content.cta.button.text")}
                </button>
              </a>
              <h2>{t("main.content.cta.description")}</h2>
            </div>
          </div>
        </div>
      </main>
      <section className="bg pt-0">
        <SliderHome t={t} />
      </section>
      <section id="specs">
        <div className="container">
          <div className="title-1">
            <h2>{t("feaures_section.0.title")}</h2>
            <p>{t("feaures_section.0.description")}</p>
          </div>
          <Features t={t} />
        </div>
      </section>
      <section id="contactus">
        <div className="container">
          <div className="form">
            <div className="form-card">
              <div className="arrow">
                <img src="/images/form-arrow.svg" alt="" />
              </div>
              <div className="txt-box">
                <small>Contact us</small>
                <h2>Auto-China invites YOU to join our journey!</h2>
              </div>
            </div>
            <FormContact />
          </div>
        </div>
      </section>
      <Footer t={t} lng={params.lng} />
    </div>
  );
}
