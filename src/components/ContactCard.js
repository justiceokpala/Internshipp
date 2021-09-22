import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import UserProfile from "./userProfile";

function ContactCard() {
  const [contacts, setContacts] = useState("");

  useEffect(() => {
    fetch("https://indapi.kumba.io/webdev/assignment")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  return (
    <div>
      {/* check if contacts exist */}
      {contacts !== "" ? (
        <UserProfile contact={contacts} />
      ) : (
        <p>No User Found</p>
      )}
      {contacts !== "" ? (
        <Restaurant contact={contacts} />
      ) : (
        <p>No Restaurant Found</p>
      )}
    </div>
  );
}

export default ContactCard;
