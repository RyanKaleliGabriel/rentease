import React from "react";
import { Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <div className="sideBarItems">
      <button className="toggleSidebar">
        <i class={props.mainIcon}></i>
      </button>
      <Link to={props.mainLink} className="sideComponents">
        {props.mainName}
      </Link>
    </div>
  );
}
