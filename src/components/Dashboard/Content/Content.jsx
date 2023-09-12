import React from "react";
import NavBar from "../Navbar/Navbar";
import NumericStats from "./NumericStats/NumericStats";

export default function Content() {
  return (
    <main className="content">
      <NavBar />
      <div className="mainContent">
        <NumericStats />
      </div>
    </main>
  );
}
