import Link from "next/link";
import React from "react";
import { FaList } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import MFooter from "../MobailComponent/MFooter";
import DropdownItem from "./DropdownItem";
import SideMenu from "./SideMenu";
function Navbar() {
  return (
    <>
      <div className="sticky d-none d-md-block " id="main-header">
        {/* Navbar 1 */}
        <nav className="navbar navbar-expand-md navbar-2">
          <div className="container">
            <ul className="navbar-nav navbar-nav-1">
              <div className="dropdown">
                <button className="btn-style" id="toggler-btn">
                  <FaList />
                </button>

                <li className="nav-item">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>Catagories</span>
                    <svg className="bi ml-3" width={18} height={18}></svg>
                    <FiChevronDown />
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <DropdownItem />
                  </div>
                </li>
              </div>
            </ul>
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item  pl-5">
                <Link href="/allShops">
                  <a className="nav-link ">All Shops</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/campaigns">
                  <a className="nav-link">Campaigns</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/topUp">
                  <a className="nav-link">TopUp</a>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/newsFeed">
                  <a className="nav-link">News Feed</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/merchantZone">
                  <a className="nav-link"> Merchant Zone</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/help">
                  <a className="nav-link"> Help</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* End Main Header */}
      <SideMenu />
      {/* Mobile and Tab Navigation  */}
      <MFooter />
    </>
  );
}

export default Navbar;
