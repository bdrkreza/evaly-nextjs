/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { shopdata } from "../../../pages/api/api";

SwiperCore.use([Navigation]);

export default function CashOnDelivery() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(shopdata);
  }, []);
  return (
    <div>
      <div className="container  mt-5 ">
        <div>
          <h3 className="mb-3">Shops - Cash On Delivery</h3>
        </div>
        <div>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 7,
              },
            }}
          >
            {item.map((item, index) => {
              if (index >= 12) return;
              return (
                <div>
                  <SwiperSlide key={item.id}>
                    <div className="card w-100">
                      <div className="card-body">
                        <Link href="/allShops">
                          <a>
                            <img
                              src={item.img}
                              className="card-img-top"
                              alt="shops"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
