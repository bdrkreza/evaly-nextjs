/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsChatQuote, BsPerson } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import CartModel from "../../Model/CartModel";
import UserSideMenu from "../../Model/UserSideMenu";
import MTopBar from "../MobailComponent/MTopBar";
import Notification from "./DropdownMenu/Notification";

export default function TopSearchBar() {
  const [open, setOpen] = useState(false);
  const [showUserMenu, setUserMenu] = useState(false);

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
                  <a
                    className="nav-link top_icon"
                    data-toggle="modal"
                    data-target="#cardModel"
                    href="#"
                  >
                    <HiOutlineShoppingCart />
                  </a>
                </li>

                <CartModel />
                {/* Notification Section */}
                <div className="btn-group">
                  <li
                    className="dropdown-toggle nav-item"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <a className="nav-link top_icon" href="#">
                      <AiOutlineBell />
                    </a>
                  </li>
                  <div className="dropdown-menu mt-3">
                    <Notification />
                  </div>
                </div>

                {/* ChatSection */}
                <div className="btn-group">
                  <li
                    className="dropdown-toggle nav-item"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <a className="nav-link top_icon" href="#">
                      <BsChatQuote />
                    </a>
                  </li>
                  <div className="dropdown-menu mt-3">user</div>
                </div>

                {/* userProfile section */}
                <li className="nav-item" onClick={() => setUserMenu(true)}>
                  <a className="nav-link top_icon d-block">
                    <BsPerson />
                  </a>
                </li>
                {showUserMenu ? (
                  <UserSideMenu setUserMenu={setUserMenu} />
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
