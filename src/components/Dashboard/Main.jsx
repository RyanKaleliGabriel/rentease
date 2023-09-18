import React from "react";
import SideBar from "./SideBar/Sidebar";
import Content from "./Content/Content";
import Tenants from "./Tenants/Tenants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <div className="wrapper">
      <Router>
        <SideBar />
        <Content />
        <Routes>
          <Route path="/tenants" element={<Tenants />} />
        </Routes>
      </Router>
    </div>
  );
}
