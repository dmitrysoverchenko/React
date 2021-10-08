import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    
    const { text, backgroundColor, clickHandler, dataId } = this.props;

    return (
      <button
        style={{ backgroundColor }}
        onClick={(e) => clickHandler(e)}
        className={"button"}
        data-id={dataId}
      >
        {text}
      </button>
    );
  }
}

export default Button;
