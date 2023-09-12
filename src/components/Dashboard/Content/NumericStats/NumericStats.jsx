import React from "react";
import TenantsNumber from "./TenantsNumber";
import Complaints from "./Complaints";
import RentDue from "./RentDue";
import Units from "./Units";
import UnitsOccupied from "./UnitsOccupied";
import UnitsVacant from "./UnitsVacant";

export default function NumericStats() {
    return(
        <div className="numericStatsParent">
        <TenantsNumber />
        <Complaints/>
        <RentDue/>
        <Units/>
        <UnitsOccupied/>
        <UnitsVacant/>
      </div>
    )
    
}