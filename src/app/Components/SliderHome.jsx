"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderHome({t}) {
  var settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {/* <div className="feature-slider" {...settings}> */}
        <div>
          <div className="slider-card">
            <img src="/images/5.jpg" alt="" />
            <div className="content">
              <h3>{t(`sections.0.slider.slides.0.title`)}</h3>
              <p>
              {t(`sections.0.slider.slides.0.description`)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/19.jpg" alt="" />
            <div className="content">
            <h3>{t(`sections.0.slider.slides.1.title`)}</h3>
              <p>
              {t(`sections.0.slider.slides.1.description`)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/6.jpg" alt="" />
            <div className="content">
            <h3>{t(`sections.0.slider.slides.2.title`)}</h3>
              <p>
              {t(`sections.0.slider.slides.2.description`)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/14.jpg" alt="" />
            <div className="content">
            <h3>{t(`sections.0.slider.slides.3.title`)}</h3>
              <p>
              {t(`sections.0.slider.slides.3.description`)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/15.jpg" alt="" />
            <div className="content">
            <h3>{t(`sections.0.slider.slides.4.title`)}</h3>
              <p>
              {t(`sections.0.slider.slides.4.description`)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/4.jpg" alt="" />
            <div className="content">
            <h3>{t(`sections.0.slider.slides.5.title`)}</h3>
              <p>
              {t(`sections.0.slider.slides.5.description`)}
              </p>
            </div>
          </div>
        </div>
      </Slider>
      <div className="cstm-slider-nav">
        <button className="cstm-prev" onClick={previous}>
          <i className="uil uil-angle-left-b" />
        </button>
        <button className="cstm-next" onClick={next}>
          <i className="uil uil-angle-right-b" />
        </button>
      </div>
    </>
  );
}

export default SliderHome;
