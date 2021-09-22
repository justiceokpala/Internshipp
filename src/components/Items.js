import React from "react";
import { useState, useEffect } from "react";
import ItemsList from "../asset/images/itemsLIst";
const Items = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://indapi.kumba.io/webdev/assignment")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.items);
      });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ItemsList
          name={contact.name}
          category={contact.category}
          price={contact.price}
          currency={contact.currency}
          tax_pct={contact.tax_pct}
          quantity={contact.quantity}
        />
      ))}
    </>
  );
};

export default Items;
