import React from "react";
import NavBar from "./Navbar";
import NumericStats from "./Content/NumericStats/NumericStats";
import FirstTables from "./Content/FirstTables/FirstTables";
import Complaints from "./Content/Complaints/Complaints";




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
        <Complaints/>
      </div>
    </main>
  );
}
