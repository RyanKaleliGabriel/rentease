import React from "react";

export default function Navside() {
  return (
    <div class="container-fluid">
      <div class="row ns-row">
        <div class="col-2 sideBar text-center js-sidebar" id="sidebar">
          <p>Side</p> <p>Side</p> <p>Side</p> <p>Side</p>
          <p>Side</p>
          <p>Side</p>
          <p>Side</p>
        </div>
        <div class="col-10 content">
          <div class="row">
            <div class="col-12 navBar">
              <a
                class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25"
                href="/#"
              >
                Icon link
                <svg class="bi" aria-hidden="true">
                  <use xlink:href="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
