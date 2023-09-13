import React from "react";
import NavBar from "../Navbar/Navbar";
import NumericStats from "./NumericStats/NumericStats";
import OccupiedUnits from "./OccupiedUnits/OccupiedUnits"


export default function Content() {
  return (
    <main className="content">
      <NavBar />
      <div className="mainContent">
        <NumericStats />
        <OccupiedUnits/>
      </div>
    </main>
  );
}
