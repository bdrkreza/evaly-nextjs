import React from "react";
import AllShopCard from "../components/AllShopCard/AllShopCard";
import { data } from "./api/api";

export default function allShops() {
  return (
    <div>
      <section className="our-publication pt-100 pb-70">
        <div className="container">
          <div className="section-header">
            <i className="fa fa-book"></i>
            <h2>Our Publications</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            {data.map((data, index) => (
              <div key={index} className="col-xl-3 col-md-4 col-sm-12">
                <AllShopCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
