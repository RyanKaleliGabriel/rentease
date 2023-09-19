import React from "react";

export default function RecentTransactions() {
  return (
    <div className="recentlyTableChild">
      <div className="tableContainer">
        <h5 className="tableHeading">Latest Transactions</h5>
        <button className="tableBtn">All</button>
      </div>
      <table id="recentlyRegistered">
        <thead>
          <tr>
            <th>Code</th>
            <th className="nameTransc">Name</th>
            <th className="reasonTransc">Reason</th>
            <th>Amount</th>
            <th>Status</th>
            <th className="dateTransc">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>QEYWJHBSY</td>
            <td className="nameTransc">Harvey Spectre</td>
            <td className="reasonTransc">Rent</td>
            <td>KES 80000</td>
            <td>
              <span className="statusTransc">Successful</span>
            </td>
            <td>
              <span className="dateTable dateTransc">02/05/2023</span>
            </td>
          </tr>
          <tr>
            <td>QWMDYRTWT</td>
            <td className="nameTransc">Walter White</td>
            <td className="reasonTransc">House Deposit</td>
            <td>KES 30000</td>
            <td>
              <span className="statusTransc">Successful</span>
            </td>
            <td>
              <span className="dateTable dateTransc">07/05/2023</span>
            </td>
          </tr>

          <tr>
            <td>QVXTDNBTS</td>
            <td className="nameTransc">Grace Shelby</td>
            <td className="reasonTransc">Rent</td>
            <td>KES 45000</td>
            <td>
              <span className="statusTransc">Successful</span>
            </td>
            <td>
              <span className="dateTable dateTransc">15/05/2023</span>
            </td>
          </tr>
          <tr>
            <td>QADSGWUVD</td>
            <td className="nameTransc">Nicholas Benjamin</td>
            <td className="reasonTransc">Garbage Fee</td>
            <td>KES 500</td>
            <td>
              <span className="statusTransc">Successful</span>
            </td>
            <td>
              <span className="dateTable dateTransc">22/05/2023</span>
            </td>
          </tr>
          <tr>
            <td>QTSHDSYTV</td>
            <td className="nameTransc">Martin Walsh</td>
            <td className="reasonTransc">RentGarbage Fee</td>
            <td>KES 50000</td>
            <td>
              <span className="statusTransc">Successful</span>
            </td>
            <td>
              <span className="dateTable dateTransc">01/06/2023</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
