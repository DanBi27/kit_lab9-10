import React from "react";
import { Link } from "react-router-dom";

import { getRoutes } from "../Routes";

const Header = () => {
  const routes = getRoutes().filter(route => route.path);

  const userId = localStorage.getItem("userId");
  function logOut() {
    localStorage.removeItem("userId");
    window.location.reload();
  }
  return (
    <div className="header-container">
      {routes.map(route => (
        <Link className="header-item" key={route.path} to={route.path}>
          {route.label}
        </Link>
      ))}
      {userId ? (
        <button
          onClick={() => {
            logOut();
          }}
          className="sign-out-button"
        >
          Log out
        </button>
      ) : null}
    </div>
  );
};

export default Header;
