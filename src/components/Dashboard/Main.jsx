import React from "react";
import SideBar from "./Sidebar";
import Content from "./Content";

export default function Main() {
  return (
    <div className="wrapper">
      <SideBar />
      <Content />
    </div>
  );
}
