import React, { useEffect, useState } from "react";
import UserProfile from "./userProfile";

function ContactCard() {
  const [contacts, setContacts] = useState("");

  useEffect(() => {
    fetch("https://indapi.kumba.io/webdev/assignment")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        //console.log(data);
      });
  }, []);
  return (
    <>
      {/* check if contacts exist */}
      {contacts !== "" ? (
        <UserProfile contact={contacts} />
      ) : (
        <p>No User Found</p>
      )}
    </>
  );
}

export default ContactCard;
