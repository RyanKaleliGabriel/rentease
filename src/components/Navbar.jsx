import React from "react";
import Profile from "./Navbar/Profile";

export default function NavBar() {
  const Main = (props) => {
    return (
      <div className="sideBarItems">
        <button className="toggleSidebar">
          <i class={props.mainIcon}></i>
        </button>
      </div>
    );
  };
  const navlinks = [
    { icon: "iconSideBarItem bi bi-people" },
    { icon: "iconSideBarItem bi bi-houses" },
    { icon: "iconSideBarItem bi bi-cash" },
    { icon: "iconSideBarItem bi bi-bell" },
    { icon: "iconSideBarItem bi bi-person-gear" },
  ];

  const createEntry = (entrydetail) => {
    return <Main mainIcon={entrydetail.icon} />;
  };
  return (
    <div className="navWrapper">
      {navlinks.map(createEntry)}
      <Profile />
    </div>
  );
}
