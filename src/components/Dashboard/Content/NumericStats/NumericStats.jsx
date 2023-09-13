import React from "react";
import TenantsNumber from "./TenantsNumber";
import RentDue from "./RentDue";
import UnitsOccupied from "./UnitsOccupied";
import UnitsVacant from "./UnitsVacant";

export default function NumericStats() {
    return(
        <div className="numericStatsParent">
        <TenantsNumber />
        <RentDue/>
        <UnitsOccupied/>
        <UnitsVacant/>
      </div>
    )
    
}