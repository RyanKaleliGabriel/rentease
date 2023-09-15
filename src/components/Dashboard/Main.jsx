import React from "react";
import SideBar from "./SideBar/Sidebar";
import Content from "./Content/Content";


export default function Main() {
  return (
    <div className="wrapper">
      <SideBar />
      <Content />
    </div>
  );
}
