import React from "react";

export default function Main(props) {
  return (
    <div className="sideBarItems">
      <button className="toggleSidebar">
        <i class={props.mainIcon}></i>
      </button>
      <a href="/#" className="sideComponents">
        {props.mainName}
      </a>
    </div>
  );
}
