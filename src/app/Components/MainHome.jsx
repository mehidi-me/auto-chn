"use client";
import SliderHome from "./SliderHome";
import Header from "./Header";
import Features from "./Features";
import FormContact from "./FormContact";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollReveal({
        reset: false,
        distance: "60px",
        duration: 1200,
        delay: 30,
      });

      // Set up ScrollReveal for various elements
      ScrollReveal().reveal("main .content h1", {
        delay: 10,
        origin: "bottom",
      });
      ScrollReveal().reveal("main .content h2", {
        delay: 50,
        origin: "bottom",
      });
      ScrollReveal().reveal("main .content button", {
        delay: 50,
        origin: "bottom",
      });
      ScrollReveal().reveal(".title-1 h2", { delay: 10, origin: "bottom" });
      ScrollReveal().reveal(".title-1 p", { delay: 50, origin: "bottom" });
      ScrollReveal().reveal(".feature .ico", { delay: 30, origin: "left" });
      ScrollReveal().reveal(".feature h5", { delay: 90, origin: "left" });
      ScrollReveal().reveal(".form-card", { delay: 50, origin: "bottom" });
      ScrollReveal().reveal("footer .wraper", { delay: 50, origin: "bottom" });
    }
  }, []);
  return (
    <div>
      <Header />
      <main>
        <video src="/images/bg.mp4" className="bg" autoPlay loop muted />
        <div className="container">
          <div className="content">
            <center>
              <h1>
                Discover the ultimate electric vehicle <br />
                <span>Xiaomi SU7</span>
              </h1>
              <a href="https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123">
                <button>
                  <i className="uil uil-shopping-bag" /> Buy now
                </button>
              </a>
            </center>
            <div className="cta">
              <a href="#contactus">
                <button className="line">Contact us for more info</button>
              </a>
              <h2>
                Xiaomi SU7, the latest addition to our electric vehicle lineup,
                brings a whole new level of innovation and performance to the
                table.
              </h2>
            </div>
          </div>
        </div>
      </main>
      <section className="bg pt-0">
        <SliderHome />
      </section>
      <section id="specs">
        <div className="container">
          <div className="title-1">
            <h2>Exploring Spesifications, Performance Product</h2>
            <p>
              Xiaomi SU7, the latest addition to our electric vehicle lineup,
              brings a whole new level of innovation and performance to the
              table.
            </p>
          </div>
          <Features />
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
              m@auto-china.com
            </a>
            <div className="flex">
              <a href="https://order.auto-china.com/configurations/x/xo/v15?ref=ABC123">
                <button>Buy now</button>
              </a>
              <div className="social">
                <a href="https://www.instagram.com/autochn">Instagram</a>
                <a href="https://youtube.com/@auto-chn">YouTube</a>
                <a href="https://wa.me/+971585728686">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="location">
              <a href="#">
                <div className="item">
                  <div className="name">
                    <img src="/images/Flag_of_Germany.svg.png" alt="" />
                    <h3>Germany</h3>
                  </div>
                  <p>Auto China GmbH Karlsplatz 3 80335 München</p>
                </div>
              </a>
              <a href="#">
                <div className="item">
                  <div className="name">
                    <img src="/images/Flag_of_Switzerland.svg.png" alt="" />
                    <h3>Switzerland</h3>
                  </div>
                  <p>Auto China AG Baarerstrasse 79 6300 Zug</p>
                </div>
              </a>
              <a href="#">
                <div className="item">
                  <div className="name">
                    <img
                      src="/images/Flag_of_the_United_Arab_Emirates.svg.png"
                      alt=""
                    />
                    <h3>United Arab Emirates</h3>
                  </div>
                  <p>Auto China Umm Suqeim St - Al Quoz Dubai</p>
                </div>
              </a>
            </div>
            <div className="about">
              <h3>About Auto China</h3>
              <p>
                Founded in 2010, Xiaomi Corporation has grown to become one of
                the world’s leading tech companies, revolutionizing the
                smartphone industry and expanding into AIoT (AI + IoT)
                technology. With a vision to “Make friends with users and be the
                coolest company in the users’ hearts,” Xiaomi has continuously
                driven innovation and provided high-quality user experiences. As
                of September 2024, Xiaomi has approximately 685.8 million
                monthly active users and connects over 861 million smart devices
                across its global platform. The company’s “Human × Car × Home”
                ecosystem integrates personal devices, smart home products, and
                cars to provide an unparalleled connected experience. Xiaomi is
                committed to shaping the future of technology and improving
                lives worldwide.
              </p>
            </div>
            <div className="copy">
              <p>
                {" "}
                © Copyright 2025 Auto-China.
                <span>All rights reserved</span>
              </p>
              <div className="social">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}