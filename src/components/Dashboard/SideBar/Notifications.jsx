import React from "react";

export default function Notifications(props) {
  return (
    <div className="sideBarItems">
      <button onClick={props.toggle} className="toggleSidebar">
        <i class="iconSideBarItem bi bi-bell"></i>
      </button>
      <a href="/#" className="sideComponents">
        Notifications
      </a>
    </div>
  );
}
