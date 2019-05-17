import React, { Component } from "react";
import CardList from "../components/CardList";
import AddButton from "./AddButton";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
      addForm: false
    };
  }

  onSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  handleClick = () => {
    console.log("click");
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
        <div className="flex items-center justify-around">
          <h1 className="f1 ml5 dark-blue">RoboFriends</h1>
          <AddButton onClick={this.handleClick} />
          <SearchBox classname="mr5" onSearch={this.onSearch} />
          {/* {this.state.addForm ? <h1>Working</h1> : <div />} */}
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
