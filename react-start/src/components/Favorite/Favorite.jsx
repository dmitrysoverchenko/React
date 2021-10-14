import React from "react";
import * as Favorites from "./star";
import "./Favorite.scss";
import PropTypes from "prop-types";

const Favorite = ({ type, color, filled, className, favoriteHandler, id }) => {
  const svg = Favorites[type];
  return (
    <div
      className={`icon icon--${type} ${className}`}
      onClick={() => favoriteHandler(id)}
    >
      {svg({ color, filled })}
    </div>
  );
};

Favorite.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  filled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  favoriteHandler: PropTypes.func,
};

Favorite.defaultProps = {
  type: "star",
  filled: false,
};

export default Favorite;
