import React from "react";

const Profile = () => {
  const [email, password] = localStorage.getItem("userId").split(":");

  return (
    <div>
      <h3>Email:</h3> {email}
      <h3>Password:</h3> {password}
    </div>
  );
};

export default Profile;
