/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { shopdata } from "../../../pages/api/api";
export default function ShopbyStores() {
  return (
    <div>
      <div className="container">
        <div className="brand-header">
          <h3>
            <strong>Shops - Cash On Delivery</strong>
          </h3>
          <form className="d-flex">
            <input
              className="search-box "
              type="search"
              placeholder="Search for ..."
            />
            <button className="search-box-btn" type="submit">
              <RiSearchLine />
            </button>
            <button className="btn btn-dark brand-header-sec-btn">
              View All
            </button>
          </form>
        </div>
        <div className="shop_brand_container">
          {shopdata.map((item) => (
            <div className="card shop_brand_body">
              <div className="card-body text-center">
                <img src={item.img} className="card-img-top" alt="img" />
                <h6 className="card-text">Some quick example</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
