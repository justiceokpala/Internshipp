import React from "react";
import UserAvatar from "../asset/images/avatar.png";

const UserProfile = ({ contact }) => {
  console.log(contact);
  const {
    user: { name, address, phone, about, likes, dislikes },
  } = contact;

  return (
    <>
      <div className="contact-card container-fluid">
        <div className="user-details">
          <img src={UserAvatar} alt="..." width="100px" />
          <p>
            <b className="red">Name</b>: {name}
          </p>
          <p>
            <b className="red">Address</b>: {address}
          </p>
          <p>
            <b className="red">Phone </b>: {phone}
          </p>
          <p>
            <b className="red">About </b>: {about}
          </p>
          {likes.length > 0 && (
            <>
              <p>
                <b className="red">Likes</b>
              </p>
              <ul>
                {likes.map((like, index) => (
                  <li key={index}>{like}</li>
                ))}
              </ul>
            </>
          )}
          <p>
            <b className="red">Dislikes</b>
          </p>
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
