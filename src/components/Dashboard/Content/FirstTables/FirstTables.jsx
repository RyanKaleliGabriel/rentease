import React from "react";
import OccupiedUnits from "./OccupiedUnits";
import Transactions from "./Transactions";

export default function FirstTables() {
  return (
    <div className="recentlyTable">
      <OccupiedUnits />
      <Transactions/>
    </div>
  );
}
