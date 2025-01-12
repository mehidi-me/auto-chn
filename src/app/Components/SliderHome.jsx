"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderHome() {
  var settings = {
    infinite: false,
    slidesToShow: 3,
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
              <h3>Refined Exterior</h3>
              <p>
                The Xiaomi SU7 features sleek contours, a unique ducktail
                spoiler, and a low-drag coefficient of 0.195, delivering both
                striking design and peak efficiency.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/19.jpg" alt="" />
            <div className="content">
              <h3>Comfortable and Smart Interior</h3>
              <p>
                A symmetrical cabin with ergonomic elements, a tri-spoke
                D-shaped steering wheel, and advanced HUD ensures comfort and
                focused driving.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/8.jpg" alt="" />
            <div className="content">
              <h3>Unmatched Performance</h3>
              <p>
                With rapid 0-200 km/h acceleration in 10.67 seconds and
                fast-charging capabilities offering up to 510 km in 15 minutes,
                the Xiaomi SU7 redefines EV standards.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/14.jpg" alt="" />
            <div className="content">
              <h3>Xiaomi Pilot Pro: Cutting-Edge Autonomous Driving</h3>
              <p>
                Powered by 11 cameras and NVIDIA DRIVE Orin, Xiaomi Pilot Pro
                ensures seamless and advanced autonomous driving experiences.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/15.jpg" alt="" />
            <div className="content">
              <h3>Smart Cabin Technology: Human × Car × Home</h3>
              <p>
                The 16.1-inch screen, 5-screen linkage, and support for Xiaomi
                smart home devices create a connected, intuitive driving
                ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img src="/images/4.jpg" alt="" />
            <div className="content">
              <h3>Safety First</h3>
              <p>
                A steel-aluminum alloy cage and 360° active safety systems
                provide robust protection for unmatched peace of mind.
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
