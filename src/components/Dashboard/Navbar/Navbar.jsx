import React from "react";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Units from "./Units";
import Transactions from "./Transactions";
import Staff from "./Staff";
import Tenants from "./Tenants";

export default function NavBar() {
  return (
    <div className="navWrapper">
      <Tenants />
      <Units />
      <Transactions />
      <Notifications />
      <Staff />
      <Profile />
    </div>
  );
}
