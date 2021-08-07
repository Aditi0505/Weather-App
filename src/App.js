import SearchBar from "./components/searchBar";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    searchQuery: "",
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          onChange={this.handleSearch}
          value={this.state.searchQuery}
        />
      </div>
    );
  }
}

export default App;
