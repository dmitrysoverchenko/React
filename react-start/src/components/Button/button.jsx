import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, backgroundColor, handlerClick } = this.props;

    return (
      <button
        style={{ backgroundColor }}
        onClick={(e) => handlerClick(e)}
        className={"btn"}
      >
        {text}
      </button>
    );
  }
}

export default Button;
