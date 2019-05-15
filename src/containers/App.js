import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  onSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    if (this.state.robots.length === 0) {
      return <h1>Loading..</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1 code">RoboFriends</h1>
          <SearchBox onSearch={this.onSearch} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
