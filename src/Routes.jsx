import React from "react";

import { Switch, Route, Redirect } from "react-router";

import PublicMain from "./pages/public/Main";
import SignIn from "./pages/public/Signin";

import PrivateMain from "./pages/private/Main";
import Profile from "./pages/private/Profile";

const publicRoutes = [
  {
    label: "Home",
    path: "/",
    exact: true,
    component: PublicMain
  },
  {
    label: "Sign In",
    path: "/sign-in",
    component: SignIn
  },
  {
    path: "null",
    render: () => <Redirect to="/" />
  }
];

const privateRoutes = [
  {
    label: "Home",
    path: "/",
    exact: true,
    component: PrivateMain
  },
  {
    label: "Profile",
    path: "/profile",
    component: Profile
  }
];

const commonRoutes = [
  {
    path: null,
    render: () => <Redirect to="/" />
  }
];

export const getRoutes = () =>
  (localStorage.getItem("userId") ? privateRoutes : publicRoutes).concat(
    commonRoutes
  );

const Routes = props => {
  const renderRoutes = routes =>
    routes.map(({ component: Component, render, ...route }) => (
      <Route
        key={route.path}
        {...route}
        {...(Component
          ? {
              render: routerProps => <Component {...routerProps} {...props} />
            }
          : {
              render
            })}
      />
    ));

  const routes = getRoutes();

  return <Switch>{renderRoutes(routes)}</Switch>;
};

export default Routes;
