import React from "react";

export default function RecentlyOccupied() {
  return (
    <div className="recentlyTableChild">
      <div className="tableContainer">
        <h5 className="tableHeading">Latest Occupied Units</h5>
        <button className="tableBtn">All</button>
      </div>
      <table id="recentlyRegistered">
        <thead>
          <tr>
            <th>House </th>
            <th>Tenant</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>503</td>
            <td>Harvey Spectre</td>
            <td>
              <span className="dateTable">02/05/2023</span>
            </td>
          </tr>
          <tr>
            <td>404</td>
            <td>Walter White</td>
            <td>
              <span className="dateTable">07/05/2023</span>
            </td>
          </tr>

          <tr>
            <td>101</td>
            <td>Grace Shelby</td>
            <td>
              <span className="dateTable">15/05/2023</span>
            </td>
          </tr>
          <tr>
            <td>305</td>
            <td>Nicholas Benjamin</td>
            <td>
              <span className="dateTable">22/05/2023</span>
            </td>
          </tr>
          <tr>
            <td>203</td>
            <td>Martin Walsh</td>
            <td>
              <span className="dateTable">01/06/2023</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
