import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import TopSearchBar from "./TopSearchBar";

function Header() {
  return (
    <>
      {/* Top Header */}
      <Topbar />
      <TopSearchBar />
      <Navbar />
    </>
  );
}

export default Header;
