import React from "react";
import { useState } from "react";

export default function SideBar() {
  const [sidebarVisible, setsideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setsideBarVisible(!sidebarVisible);
  };

  return (
    <div className={sidebarVisible ? "sideBar" : "sidebarMinimized"}>
      <div className="sideBarContent">
        <button onClick={toggleSideBar} className="toggleSidebar">
          <i class={`iconSideBar ${sidebarVisible ? "bi bi-x":"bi bi-list"}`}></i>
        </button>
        <h5 className="sideBarLogo">RentEase</h5>
      </div>
    </div>
  );
}
