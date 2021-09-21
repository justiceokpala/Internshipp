import React from "react";

const UserProfile = ({ contact }) => {
  console.log(contact);
  const {
    user: { name, address, phone, about, likes, dislikes },
  } = contact;

  return (
    <>
      <div className="contact-card">
        <div className="user-details">
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>About: {about}</p>
          {likes.length > 0 && (
            <>
              <p>Likes</p>
              <ul>
                {likes.map((like, index) => (
                  <li key={index}>{like}</li>
                ))}
              </ul>
            </>
          )}
          <p>Dislikes</p>
          <ul>
            {dislikes.map((dislike, index) => (
              <li key={index}>{dislike}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
