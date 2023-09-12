import React from "react";

export default function Staff(props) {
  return (
    <div className="sideBarItems">
      <button onClick={props.toggle} className="toggleSidebar">
        <i class="iconSideBarItem bi bi-person-gear"></i>
      </button>
      <a href="/#" className="sideComponents">
        Staff
      </a>
    </div>
  );
}
