import React, { Component } from "react";
import CardList from "../components/CardList";
import AddButton from "../components/AddButton";
import SearchBox from "../components/SearchBox";
import NewRobotForm from "../components/NewRobotForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
      addingRobot: false
    };
  }

  onSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  showaddingRobot = () => {
    this.setState({ addingRobot: !this.state.addingRobot });
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
    return (
      <div className="tc">
        <div className="flex items-center justify-end pl4 pr4">
          <h1 className="f1 dark-blue mr-auto">RoboFriends</h1>
          <AddButton callback={this.showaddingRobot} />
          <SearchBox onSearch={this.onSearch} />
        </div>
        {this.state.addingRobot && <NewRobotForm />}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
