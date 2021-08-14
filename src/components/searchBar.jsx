import React from "react";
import axios from "axios";
import Display from "./Display";
import {
  REACT_APP_API_URL,
  REACT_APP_API_KEY,
  REACT_APP_ICON_URL,
} from "../config.json";
class SearchBar extends React.Component {
  state = {
    temp: "",
    icon: null,
  };
  handleClick = async (city) => {
    const { data } = await axios.get(REACT_APP_API_URL, {
      params: {
        q: city,
        appid: REACT_APP_API_KEY,
      },
    });
    const iconName = data["weather"][0].icon;
    const iconURL = REACT_APP_ICON_URL + iconName + "@2x" + ".png";
    console.log(iconURL);
    const { data: icon } = await axios.get(iconURL);
    console.log(icon.url);
    this.setState({ temp: data.main.temp, icon: icon.url });
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
        <Display value={this.state.temp} icon={this.state.icon} />
      </div>
    );
  }
}
export default SearchBar;
