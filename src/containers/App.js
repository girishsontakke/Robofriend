import React, { Component } from "react";
import SearcBox from "../components/SearchBox";
import Cardlist from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../action";

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  ...state.requestRobots,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { onSearchChange, searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
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
