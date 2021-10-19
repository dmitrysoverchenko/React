import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({text, backgroundColor, clickHandler, cancel}) => (
    <button
        style={{backgroundColor}}
        onClick={clickHandler}
        className={"button"}
        data-cancel={cancel}
    >
      {text}
    </button>
);

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  clickHandler: PropTypes.func,
  cancel: PropTypes.bool
}

Button.defaultProp = {
  cancel: false
}

export default Button;