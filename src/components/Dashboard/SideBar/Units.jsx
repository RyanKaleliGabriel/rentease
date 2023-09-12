import React from "react";

export default function Units(props) {
  return (
    <div className="sideBarItems">
      <button onClick={props.toggle} className="toggleSidebar">
        <i class="iconSideBarItem bi bi-houses"></i>
      </button>
      <a href="/#" className="sideComponents">
        Units
      </a>
    </div>
  );
}
