import Link from "next/link";
import React from "react";
export default function NavbarItem() {
  return (
    <>
      <ul className="bg-dark ">
        <li>
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
    </>
  );
}
