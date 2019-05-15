import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearch={this.onSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
