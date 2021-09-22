import React from "react";

const Restaurant = ({ contact }) => {
  console.log(contact);
  const {
    restaurant: { name, street, city, state, zipcode },
  } = contact;

  return (
    <>
      <div className="restaurant-details">
        <p>
          <b className="red">Name</b>: {name}
        </p>
        <p>
          <b className="red">Street</b>: {street}
        </p>
        <p>
          <b className="red">City</b>: {city}
        </p>
        <p>
          <b className="red">State </b>: {state}
        </p>
        <p>
          <b className="red">zipcode </b>: {zipcode}
        </p>
      </div>
    </>
  );
};
export default Restaurant;
