import React from "react";
import UserProfile from "./userProfile";
import Restaurant from "./Restaurant";
import ItemsList from "../asset/images/itemsLIst";

function OrderSummary() {
  return (
    <>
      <Restaurant />
      <UserProfile />
      <ItemsList />
    </>
  );
}

export default OrderSummary;
