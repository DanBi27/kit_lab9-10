import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Routes from "./Routes";
import Layout from "./layout/Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUserLogin = this.onUserLogin.bind(this);
    this.onUserLogout = this.onUserLogout.bind(this);

    this.state = {
      users: [],
      loading: false,
      errorMessage: "",
      userId: localStorage.getItem("userId")
    };
  }

  onUserLogin(userId) {
    this.setState({ userId });
  }

  onUserLogout() {
    this.setState({ userId: null });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout onUserLogout={this.onUserLogout}>
          <Routes onUserLogin={this.onUserLogin} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
