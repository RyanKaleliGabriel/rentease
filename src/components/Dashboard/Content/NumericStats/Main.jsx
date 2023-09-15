import React from "react";
import { useState } from "react";

export default function Main(props) {

  return (
    <div
      className="contentContainer"
    >
      <div className="numericStatsChild">
        <span className="statName">{props.mainName}</span>
        <i className={props.mainIcon}></i>
      </div>
      <h5 className="stat">{props.mainNumber}</h5>
    </div>
  );
}
