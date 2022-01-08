import React from "react";
import PropTypes from "prop-types";

const Subtitle = ({ text }) => {
  return <h3>{text}</h3>;
};
Subtitle.propTypes = {
  text: PropTypes.string,
};

export default Subtitle;
