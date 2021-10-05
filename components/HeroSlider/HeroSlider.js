/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSlider() {
  return (
    <section className="row">
      <div className="col-md-4"></div>
      <div className="col-md-8">
        <div className="slider-section">
          <div
            id="carouselId"
            className="carousel bg-pink slide pt-3"
            data-ride="carousel"
          >
            <ol className="carousel-indicators ">
              <li
                data-target="#carouselId"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselId" data-slide-to="1"></li>
              <li data-target="#carouselId" data-slide-to="2"></li>
              <li data-target="#carouselId" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <a>
                  <img
                    className="img-fluid"
                    src="images/slider/slider.png"
                    alt="First slide"
                  />
                </a>
              </div>
              <div className="carousel-item ">
                <a>
                  <img
                    className="img-fluid"
                    src="images/slider/slider01.png"
                    alt="second slide"
                  />
                </a>
              </div>
              <div className="carousel-item ">
                <a>
                  <img
                    className="img-fluid"
                    src="images/slider/slider02.png"
                    alt="third slide"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex sell-img">
            <img src="images/slider/sell.png" alt="" />
            <img src="images/slider/sell.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
