import React from "react";

export default function Tenants(props) {
  return (
    <div className="sideBarItems">
      <button onClick={props.toggle} className="toggleSidebar">
        <i class="iconSideBarItem bi bi-people"></i>
      </button>
      <a href="/#" className="sideComponents">
        Tenants
      </a>
    </div>
  );
}
