import React from "react";
import UserCard from "./UserCard.Jsx";

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map(user => (
        <UserCard key={user.email} user={user} />
      ))}
    </div>
  );
};
export default UsersList;
