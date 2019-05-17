import React, { Component } from "react";
import CardList from "../components/CardList";
import AddButton from "../components/AddButton";
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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    if (!robots.length) {
      return <h1>Loading..</h1>;
    } else {
      return (
        <div className="tc">
          <div className="flex items-center justify-around">
            <h1 className="f1 ml5 dark-blue">RoboFriends</h1>
            <AddButton />
            <SearchBox classname="mr5" onSearch={this.onSearch} />
          </div>
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
