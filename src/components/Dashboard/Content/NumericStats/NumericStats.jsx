import React from "react";
import Main from "./Main";

export default function NumericStats() {
  const numericcontainers = [
    {
      name: "Tenants",
      number: 110,
      icon: "bi bi-people statIconTenant",
    },
    {
      name: "Total Revenue",
      number: "KES:56000",
      icon: "bi bi-wallet2 statIconRent",
    },
    {
      name: "Occupied Units",
      number: 7,
      icon: "bi bi-house-check statIconUnitsO",
    },
    {
      name: "Vacant Units",
      number: 54,
      icon: "bi bi-house-dash statIconUnitsV",
    },
  ];
  function createEntry(entrydetail) {
    return (
      <Main
        mainName={entrydetail.name}
        mainNumber={entrydetail.number}
        mainIcon={entrydetail.icon}
      />
    );
  }

  return (
    <div className="numericStatsParent">
      {numericcontainers.map(createEntry)}
    </div>
  );
}
