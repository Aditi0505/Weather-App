import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <img style={{ width: "70px" }} src={this.props.icon} />
      </div>
    );
  }
}

export default Display;
