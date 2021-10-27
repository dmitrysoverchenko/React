import React from "react";
import * as Icons from "./star";
import "./Icon.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";

const Icon = ({ type, color, filled, className, card }) => {
  const star = Icons[type];
  const dispatch = useDispatch();

  return (
    <>
      {start && (
        <div
          className={`icon icon--${type} ${className}`}
          onClick={() => dispatch(actions.setFavorite(card))}
        >
          {star({ color, filled })}
        </div>
      )}
    </>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  filled: PropTypes.bool,
  className: PropTypes.string,
  card: PropTypes.object,
  favoriteHandler: PropTypes.func,
};

Icon.defaultProps = {
  type: "star",
  filled: false,
};

export default Icon;
