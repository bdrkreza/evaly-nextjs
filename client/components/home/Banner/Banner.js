/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider } from "../../../pages/api/api";
import ShellBanner from "./ShellBanner";
import TopMenu from "./TopMenu";

SwiperCore.use([Autoplay, Navigation]);

export default function Banner() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    setImg(slider);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <TopMenu />
        </div>
        {/* Top Carousel section */}
        <div className="col-lg-9 col-md-12 mt-2">
          <ShellBanner />
          {/* Shell carousel section */}
          <div className="mt-3">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 2,
                },
              }}
            >
              {img.map((img, index) => {
                if (index >= 5) return;
                return (
                  <div>
                    <SwiperSlide key={img.id}>
                      <div className="slider-img">
                        <img src={img.img} alt="banner image" />
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
