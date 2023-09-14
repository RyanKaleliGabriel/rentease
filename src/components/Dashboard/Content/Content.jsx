import React from "react";
import NavBar from "../Navbar/Navbar";
import NumericStats from "./NumericStats/NumericStats";
import FirstTables from "./FirstTables/FirstTables";

export default function Content() {
  return (
    <main className="content">
      <NavBar />
      <div className="mainContent">
        <div className="admin">
          <h5 className="adminHeading">RentEase Scope of Operations</h5>
        </div>
        <NumericStats />
        <FirstTables />
      </div>
    </main>
  );
}
