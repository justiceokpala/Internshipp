import React from "react";
const ItemsList = (props) => {
  return (
    <div className="contact-card">
      <div className="items-details">
        <p>Name: {props.name}</p>
        <p>Category: {props.category}</p>
        <p>Price:{props.price}</p>
        <p>Currency:{props.currency}</p>
        <p>Tax Pct:{props.tax_pct}</p>
        <p>Quantity:{props.quantity}</p>
      </div>
    </div>
  );
};

export default ItemsList;
