import React from "react";
import { useState } from "react";
import Profile from "./SideBar/Profile";


export default function SideBar(props) {

  const Main = (props) => {
    return (
      <div className="sideBarItems">
        <button className="toggleSidebar">
          <i class={props.mainIcon}></i>
        </button>
        <a href={props.mainLink} className="sideComponents">
          {props.mainName}
        </a>
      </div>
    );
  };

  const sidelinks = [
    { icon: "iconSideBarItem bi bi-people", name: "Tenants", link: "/tenants" },
    { icon: "iconSideBarItem bi bi-houses", name: "Units", link: "" },
    { icon: "iconSideBarItem bi bi-cash", name: "Transactions", link: "" },
    { icon: "iconSideBarItem bi bi-bell", name: "Notifications", link: "" },
    { icon: "iconSideBarItem bi bi-person-gear", name: "Staff", link: "" },
  ];
  // Toggle function of the menu
  const [sidebarVisible, setSideBarVisible] = useState(false);
  const toggleSideBar = () => {
    setSideBarVisible(!sidebarVisible);
  };
  // End of toggle function

  //Creating a sideBar Entry
  const createEntry = (entrydetail) => {
    return <Main mainIcon={entrydetail.icon} mainName={entrydetail.name} />;
  };
  //End of Sidebar Entry

  return (
    // Icon And Company Name
    <div className={sidebarVisible ? "sidebarMinimized" : "sideBar"}>
      <div className="sideBarLogo">
        <button onClick={toggleSideBar} className="toggleSidebar">
          <i
            class={`iconSideBar ${sidebarVisible ? "bi bi-x" : "bi bi-list"}`}
          ></i>
        </button>
        <h5 className="sideBarLogo">RentEase</h5>
      </div>
      {/* // End of Icon and Company Name */}

      <div className="sideBarContainer">
        {sidelinks.map(createEntry)}
        <Profile />
      </div>
      {/* End of SideBar Container */}
    </div>
  );
}
