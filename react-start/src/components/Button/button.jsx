import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import actions from "../../redux/actions";
import { useDispatch } from "react-redux";

const Button = ({ text, backgroundColor, confirm }) => {
  const dispatch = useDispatch();

  return (
    <button
      style={{ backgroundColor }}
      onClick={() => dispatch(actions.closeModal(confirm))}
      className={"button"}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  clickHandler: PropTypes.func,
  cancel: PropTypes.bool,
};

Button.defaultProp = {
  cancel: false,
};

export default Button;
