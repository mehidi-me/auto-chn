"use client";
import SliderHome from "./SliderHome";
import Header from "./Header";
import Features from "./Features";
import FormContact from "./FormContact";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "../i18n/client";

export default function Home() {
  const params = useParams();
  const { t } = useTranslation(params?.lng);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     ScrollReveal({
  //       reset: false,
  //       distance: "60px",
  //       duration: 1200,
  //       delay: 30,
  //     });

  //     // Set up ScrollReveal for various elements
  //     ScrollReveal().reveal("main .content h1", {
  //       delay: 10,
  //       origin: "bottom",
  //     });
  //     ScrollReveal().reveal("main .content h2", {
  //       delay: 50,
  //       origin: "bottom",
  //     });
  //     ScrollReveal().reveal("main .content button", {
  //       delay: 50,
  //       origin: "bottom",
  //     });
  //     ScrollReveal().reveal(".title-1 h2", { delay: 10, origin: "bottom" });
  //     ScrollReveal().reveal(".title-1 p", { delay: 50, origin: "bottom" });
  //     ScrollReveal().reveal(".feature .ico", { delay: 30, origin: "left" });
  //     ScrollReveal().reveal(".feature h5", { delay: 90, origin: "left" });
  //     ScrollReveal().reveal(".form-card", { delay: 50, origin: "bottom" });
  //     ScrollReveal().reveal("footer .wraper", { delay: 50, origin: "bottom" });
  //   }
  // }, []);
  return (
    <div>
      <Header t={t} />
      <main>
        <video src="/images/bg.mp4" className="bg" autoPlay loop muted />
        <div className="container">
          <div className="content">
            <center>
              <h1>
                {t("main.content.headline")} <br />
                <span>{t("main.content.sub_headline")}</span>
              </h1>
              <a href="https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123">
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
      <footer>
        <div className="container">
          <div className="wraper">
            <a className="email" href="mailto:m@auto-china.com">
              {t("footer.footer_email")}
            </a>
            <div className="flex">
              <a href="https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123">
                <button>{t("footer.order_button")}</button>
              </a>
              <div className="social">
                <a href="https://www.instagram.com/autochn">
                  {t("footer.social_instagram")}
                </a>
                <a href="https://youtube.com/@auto-chn">
                  {t("footer.social_youtube")}
                </a>
                <a href="https://wa.me/+971585728686">
                  {t("footer.social_whatsapp")}
                </a>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="location">
              <div className="item">
                <div className="name">
                  <img src="/images/Flag_of_Germany.svg.png" alt="" />
                  <h3>{t("footer.location_germany_title")}</h3>
                </div>
                <a href="https://maps.app.goo.gl/5AoGaFv6e5GKWHUj6?g_st=ic">
                  <p>{t("footer.location_germany_address")}</p>
                </a>
                <a href="tel:+49 89 215 2496 88">
                  <b>+49 89 215 2496 88</b>
                </a>
              </div>

              <div className="item">
                <div className="name">
                  <img src="/images/Flag_of_Switzerland.svg.png" alt="" />
                  <h3>{t("footer.location_switzerland_title")}</h3>
                </div>
                <a href="https://maps.app.goo.gl/7udUHDpkoPAfy3bd8?g_st=ic">
                  <p>{t("footer.location_switzerland_address")}</p>
                </a>
                <a href="tel:+41 41 588 22 44">
                  <b>+41 41 588 22 44</b>
                </a>
              </div>

              <div className="item">
                <div className="name">
                  <img
                    src="/images/Flag_of_the_United_Arab_Emirates.svg.png"
                    alt=""
                  />
                  <h3>{t("footer.location_uae_title")}</h3>
                </div>
                <a href="https://maps.app.goo.gl/sCNcSyeBxQhr1x9r8?g_st=ic">
                  <p>{t("footer.location_uae_address")}</p>
                </a>
                <a href="tel:+971 58 572 8686">
                  <b>+971 58 572 8686
                  </b>
                </a>
              </div>
            </div>
            <div className="about">
              <h3>{t("footer.about_title")}</h3>
              <p>{t("footer.about_description")} </p>
            </div>
            <div className="trust">
              <a href="https://g.co/kgs/nskqiQt" target="_blank">
                <img src="images/google.png" alt="" />
              </a>
              <a
                href="https://www.trustpilot.com/review/auto-china.com"
                target="_blank"
              >
                <img src="images/Trustpilot Stars.svg" alt="" />
              </a>
              <a href="https://www.trustedshops.eu">
                <img src="images/trusted.png" alt="" />
              </a>
            </div>

            <div className="copy">
              <p>
                {" "}
                {t("footer.copyright_text")}
                <span>{t("footer.copyright_reserved")}</span>
              </p>
              <div className="social">
                <a href="#">{t("footer.privacy_policy")}</a>
                <a href="#">{t("footer.terms_of_service")}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
