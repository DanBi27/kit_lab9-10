import React from "react";
import "./user-card.css";
import UserAvatar from "./UserAvatar";

const UserCard = ({ user }) => {
  const {
    name: { title, first, last },
    email,
    dob: { age }
  } = user;

  return (
    <div className="user-card">
      <UserAvatar user={user} />
      <div className="contacts">
        <div className="full-name">
          {title} {first} {last}
        </div>
        <a href={`mailto:${email}`} className="email">
          {email}
        </a>
      </div>
      <div className="age">Возраст: {age}</div>
    </div>
  );
};

export default UserCard;
