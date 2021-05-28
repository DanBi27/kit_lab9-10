import React, { useState } from "react";

const SignIn = ({ onUserLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in-page">
      <input
        placeholder="Email"
        onChange={({ target: { value } }) => setEmail(value)}
        value={email}
        name="email"
        type="text"
        className="sign-in-input"
      />

      <input
        placeholder="Password"
        onChange={({ target: { value } }) => setPassword(value)}
        value={password}
        name="password"
        type="password"
        className="sign-in-input"
      />

      <button
        className="sign-in-button"
        onClick={() => {
          if (!email || !password) {
            alert("Invalid credentials");
            return;
          }

          const userId = `${email}:${password}`;
          localStorage.setItem("userId", userId);
          onUserLogin(userId);
        }}
      >
        SignIn
      </button>
    </div>
  );
};

export default SignIn;
