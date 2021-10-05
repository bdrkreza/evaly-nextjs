/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsChatQuote, BsPerson } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import MTopBar from "../MobailComponent/MTopBar";

export default function TopSearchBar() {
  return (
    <>
      <MTopBar />
      <nav className="navbar navbar-expand-md navbar-light py-3 ">
        <div className="container">
          <div className="col-6 col-sm-3 col-md-2">
            <Link href="/">
              <a className="navbar-brand text-center">
                <img
                  className="navbar-brand-icon"
                  src="images/icons/e-valiy.png"
                  alt="brandIcon"
                />
              </a>
            </Link>
          </div>
          <div className="col-md-7">
            <form className="d-flex mr-auto">
              <input
                className="search-box w-100"
                type="search"
                placeholder="Search for ..."
              />
              <button className="search-box-btn" type="submit">
                <RiSearchLine />
              </button>
            </form>
          </div>
          <div className="collapse navbar-collapse navbar-1 bg-wight">
            <div className="col-md-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link top_icon" href="#">
                    <HiOutlineShoppingCart />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link top_icon" href="#">
                    <AiOutlineBell />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link top_icon" href="#">
                    <BsChatQuote />
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link top_icon" href="#">
                    <BsPerson />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
