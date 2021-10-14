import React, { Component } from "react";
import "./Button.scss";
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { text, backgroundColor, clickHandler, cancel } = this.props;

    return (
      <button
        style={{ backgroundColor }}
        onClick={(e) => clickHandler(e)}
        className={"button"}
        data-cancel={cancel}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  clickHandler: PropTypes.func,
  cancel: PropTypes.bool,
};

export default Button;
