import React, { Component } from "react";
import SearcBox from "../components/SearchBox";
import Cardlist from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField } from "../action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responses) => responses.json())
      .then((users) => this.setState({ robots: users }));
  }
  render() {
    const { robots } = this.state;
    const { onSearchChange, searchField } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc"> loading </h1>
    ) : (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearcBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
