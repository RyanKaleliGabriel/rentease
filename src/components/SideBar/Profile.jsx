import React from "react";
import pic from "../../assets/smiling-woman-new-home.jpg";

export default function Profile(props) {
  return (
    <div className="sideBarItems">
      <button className="toggleSidebar">
        <a href="/#" data-bs-toggle="dropdown" id="messageDropdown">
          <img src={pic} alt="#" className="profile"></img>
        </a>
      </button>
      <a href="/#" className="sideComponents">
        Profile
      </a>
    </div>
  );
}
