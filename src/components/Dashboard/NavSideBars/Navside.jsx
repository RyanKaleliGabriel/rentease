import React from "react";
import pic from "../../../assets/smiling-woman-new-home.jpg";

export default function Navside() {
  return (
    <div class="container-fluid">
      <div class="row ns-row">
        <div class=" col-2 sideBar text-center js-sidebar" id="sidebar">
          <h4>RentEase</h4>
        </div>
        <div class="col-10 content" id="content">
          <div class="row">
            <div class="col-12 navBar">
              <button className="menu-button" id="menuButton">
                {" "}
                <i class="bi bi-list icon"></i>
              </button>

              <div class="right-icons">
                <div class="right-icon">
                  <a class="icon-link" data-bs-toggle="dropdown" href="/#">
                    <i class="bi bi-bell"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="/#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <img src={pic} alt="#" className="profile"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
