import React from "react";
import { FiSearch } from "react-icons/fi";
import { PiHeartLight, PiCompassLight, PiUserLight } from "react-icons/pi";

export default function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <img src="/images/insta_mini_logo.png" alt="instagram" />
        <div className="logo-line"></div>
        <img src="/images/instagram_logo.png" alt="instagram" />
      </div>
      <div className="nav-center">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-right">
        <PiHeartLight />
        <PiCompassLight />
        <PiUserLight />
      </div>
    </nav>
  );
}
