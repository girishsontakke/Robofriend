import React, { Component } from "react";
import SearcBox from "./SearchBox";
import Cardlist from "./CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responses) => responses.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1> loading </h1>;
    } else {
      return (
        <div className="tc">
          <h1> RoboFriends </h1>
          <SearcBox searchChange={this.onSearchChange} />
          <Cardlist robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
