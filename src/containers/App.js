import React, { Component } from "react";
import SearcBox from "../components/SearchBox";
import Cardlist from "../components/CardList";
import Scroll from "../components/Scroll";
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
    return !this.state.robots.length ? (
      <h1> loading </h1>
    ) : (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearcBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
