import React from "react";
import { BsPerson } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
export default function MTopBar() {
  return (
    <div>
      <nav className="moblie-nav-section fixed d-md-none d-lg-none">
        <div>
          <div className="mobile-nav">
            <div>
              <a href className="text-center">
                <img
                  className="mobile-nav-icon"
                  src="images/icons/e-valiy.png"
                  alt
                />
              </a>
            </div>
          </div>
          <div className="mobile-nav">
            <button className="mobile-nav-button mt-3">
              <HiViewList />
            </button>
            <div>
              <form className="d-flex mt-3">
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
            <div className="mobile-nav-login mt-3">
              <a className="nav-link top_icon" href="#">
                <BsPerson />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
