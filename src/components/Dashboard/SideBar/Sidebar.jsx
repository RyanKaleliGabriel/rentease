import React from "react";
import { useState } from "react";
import Profile from "./Profile";
import Notifications from "./Notifications"
import Units from "./Units";
import Transactions from "./Transactions";
import Staff from "./Staff";
import Tenants from "./Tenants";

export default function SideBar() {
  // Toggle function of the menu
  const [sidebarVisible, setSideBarVisible] = useState(false);
  const toggleSideBar = () => {
    setSideBarVisible(!sidebarVisible);
  };
  // End of toggle function

  return (
    // Icon And Company Name
    <div className={sidebarVisible ? "sideBar" : "sidebarMinimized"}>
      <div className="sideBarLogo">
        <button onClick={toggleSideBar} className="toggleSidebar">
          <i
            class={`iconSideBar ${sidebarVisible ? "bi bi-list" : "bi bi-x"}`}
          ></i>
        </button>
        <h5 className="sideBarLogo">RentEase</h5>
      </div>
      {/* // End of Icon and Company Name */}

      <div className="sideBarContainer">
        <Tenants toggle={toggleSideBar}/>
        <Units toggle={toggleSideBar}/>
        <Transactions toggle={toggleSideBar}/>
        <Notifications toggle={toggleSideBar}/>
        <Staff toggle={toggleSideBar}/>
        <Profile toggle={toggleSideBar}/>
      </div>
      {/* End of SideBar Container */}
    </div>
  );
}
