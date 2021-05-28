import React, { Component } from "react";
import axios from "axios";

import UserList from "../../components/UserList";
import Preloader from "../../components/Preloader";
import Button from "../../components/Button";

const API_URL = "https://randomuser.me/api/?results=10";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.handleFetchUsers = this.handleFetchUsers.bind(this);

    this.state = {
      users: [],
      loading: false,
      errorMessage: "",
      userId: localStorage.getItem("userId")
    };
  }

  async handleFetchUsers() {
    try {
      this.setState({ loading: true });
      const result = await axios.get(API_URL);
      const {
        data: { results: users }
      } = result;
      this.setState({ users, loading: false });
    } catch (error) {
      this.setState({ errorMessage: error.message, loading: false });
    }
  }

  render() {
    const { loading, users, errorMessage } = this.state;

    return (
      <div className="app-container">
        <div className="app-header">
          <h2>Users:</h2>
          <Button
            className="fetch-button"
            onClick={this.handleFetchUsers}
            label="Find"
          />
        </div>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        {loading ? <Preloader /> : <UserList users={users} />}
      </div>
    );
  }
}
