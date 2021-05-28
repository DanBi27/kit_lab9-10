import React from "react";

const UserAvatar = ({ user, width = 75, height = 75 }) => {
  const {
    picture: { medium }
  } = user;

  return (
    <img
      alt="User avatar"
      width={width}
      height={height}
      src={medium}
      className="user-avatar"
    />
  );
};

export default UserAvatar;
