import React from "react";

export default function Transactions(props) {
  return (
    <div className="sideBarItems">
      <button onClick={props.toggle} className="toggleSidebar">
        <i class="iconSideBarItem bi bi-cash"></i>
      </button>
      <a href="/#" className="sideComponents">
        Transactions
      </a>
    </div>
  );
}
