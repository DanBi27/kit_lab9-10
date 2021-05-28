import React from "react";
import Header from "./Header";

const Layout = ({ children, onUserLoggout }) => {
  return (
    <div className="layout">
      <Header onUserLoggout={onUserLoggout} />
      <div className="layout-body">{children}</div>
    </div>
  );
};

export default Layout;
