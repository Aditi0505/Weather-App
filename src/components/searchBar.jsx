import React from "react";
import axios from "axios";
import Display from "./Display";
import { REACT_APP_API_URL, REACT_APP_API_KEY } from "../config.json";
class SearchBar extends React.Component {
  state = {
    temp: "",
  };
  handleClick = async (city) => {
    const { data } = await axios.get(REACT_APP_API_URL, {
      params: {
        q: city,
        appid: REACT_APP_API_KEY,
      },
    });
    this.setState({ temp: data.main.temp });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          {" "}
          <form className="form-inline">
            <input
              type="text"
              className="form-control mr-sm-2"
              placeholder="Search"
              value={this.props.value}
              onChange={(e) => this.props.onChange(e.currentTarget.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={() => this.handleClick(this.props.value)}
            >
              Search
            </button>
          </form>
        </nav>
        <Display value={this.state.temp} />
      </div>
    );
  }
}
export default SearchBar;
