import React from "react";

export default function Main(props) {
  return (
    <div className="complaintContent">
      <div className="complaintsChild">
        <img alt="#" src={props.image} className="profileComplaint" />
        <p className="complaint">{props.complaint}</p>
      </div>
      <div className="complaintTimeContainer">
        <p className="complaintTime">{props.time}</p>
        <button className="complaintBtn">{props.email}</button>
      </div>
    </div>
  );
}
