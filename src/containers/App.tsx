import React, { useEffect } from "react";
import SearcBox from "../components/SearchBox";
import Cardlist from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { requestRobots, setSearchField } from "../action";

type Robots = {
  name: string;
};

interface State {
  searchRobots: {
    searchField: string;
  };
  requestRobots: {
    isPending: boolean;
    robots: Robots[];
    error: string;
  };
}

const App: React.FC<{}> = (props) => {
  const searchField = useSelector(
    (state: State) => state.searchRobots.searchField
  );
  const robots = useSelector((state: State) => state.requestRobots.robots);
  const isPending = useSelector(
    (state: State) => state.requestRobots.isPending
  );
  const dispatch = useDispatch();

  const onRequestRobots = () => dispatch(requestRobots());
  const onSearchChange = (event: React.FormEvent<HTMLInputElement>) =>
    dispatch(setSearchField(event.currentTarget.value));

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    onRequestRobots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
};

export default App;

// const mapStateToProps = (state) => ({
//   searchField: state.searchRobots.searchField,
//   ...state.requestRobots,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//   onRequestRobots: () => dispatch(requestRobots()),
// });
