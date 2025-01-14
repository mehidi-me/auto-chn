'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from '../i18n/client';

function Footer({lng}) {
     const { t } = useTranslation(lng);
     const order_link = lng == 'en' ? "https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123" : "https://order.auto-china.com/configurations/x/xo/v15?ref=EFFECT&locale=de"

  return (
    <footer>
        <div className="container">
          <div className="wraper">
            <a className="email" href="mailto:m@auto-china.com">
              {t("footer.footer_email")}
            </a>
            <div className="flex">
              <a href={order_link}>
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
                <Link href={`/${lng}/privacy-policy`}>{t("footer.privacy_policy")}</Link>
                <Link href={`/${lng}/terms-of-service`}>{t("footer.terms_of_service")}</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer