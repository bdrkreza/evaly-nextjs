/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsChatQuote, BsPerson } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import ShoppingCart from "../../Model/ShoppingCart";
import UserSideMenu from "../../Model/UserSideMenu";
import MTopBar from "../MobailComponent/MTopBar";
import ChatMenu from "./DropdownMenu/ChatMenu";
import Notification from "./DropdownMenu/Notification";

export default function TopSearchBar() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [ChatOpen, setChatOpen] = useState(false);
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
                    className="nav-link nav_link top_icon"
                    data-toggle="modal"
                    data-target="#cardModel"
                    href="#"
                  >
                    <HiOutlineShoppingCart />
                  </a>
                </li>
                <ShoppingCart />

                {/* Notification Section */}

                <div className="notification_menu">
                  <div className="btn-group">
                    <li onClick={() => setNotificationOpen(!notificationOpen)}>
                      <a className="nav-link nav_link top_icon" href="#">
                        <AiOutlineBell />
                      </a>
                    </li>
                  </div>
                  {notificationOpen ? (
                    <div className=" notification_cart">
                      <Notification setNotificationOpen={setNotificationOpen} />
                    </div>
                  ) : null}
                </div>

                {/* ChatSection */}
                <div>
                  <div className="btn-group">
                    <li onClick={() => setChatOpen(!ChatOpen)}>
                      <a className="nav-link nav_link top_icon" href="#">
                        <BsChatQuote />
                      </a>
                    </li>
                  </div>
                  <div>
                    {ChatOpen ? (
                      <div className=" notification_cart">
                        <ChatMenu setChatOpen={setChatOpen} />
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* userProfile section */}
                <li className="nav-item" onClick={() => setUserMenu(true)}>
                  <a className="nav-link  nav_link top_icon d-block">
                    <BsPerson />
                  </a>
                </li>
                {showUserMenu ? (
                  <UserSideMenu
                    setUserMenu={setUserMenu}
                    showUserMenu={showUserMenu}
                  />
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
