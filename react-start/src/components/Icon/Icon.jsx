import React from 'react';
import * as Icons from './star';
import './Icon.scss';
import PropTypes from "prop-types";

const Icon = ({type, color, filled, className, favoriteHandler, card}) => {
  const star = Icons[type];

  return (
      <>
        {star && <div className={`icon icon--${type} ${className}`} onClick={() => favoriteHandler(card)}>
          {star({color, filled})}
        </div>}
      </>
  )
}

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  filled: PropTypes.bool,
  className: PropTypes.string,
  card: PropTypes.object,
  favoriteHandler: PropTypes.func,
}

Icon.defaultProps = {
  type: "star",
  filled: false
}

export default Icon;