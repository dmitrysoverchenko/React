import React from "react";
import classes from "./Modal.module.scss";
import PropTypes from "prop-types";

const Modal = ({ header, actions, modalHandler, cancel }) => (
  <div
    className={classes["substrate"]}
    onClick={modalHandler}
    data-cancel={cancel}
  >
    <div className={classes["wrapper"]} onClick={(e) => e.preventDefault()}>
      <header className={classes.header}>
        <h2 className={classes.title}>{header}</h2>
        <button
          className={classes["close-button"]}
          onClick={modalHandler}
          data-cancel={cancel}
        >
          X
        </button>
      </header>
      <div className={classes["action-wrapper"]}>{actions}</div>
    </div>
  </div>
);

Modal.propTypes = {
  header: PropTypes.string,
  modalHandler: PropTypes.func,
  cancel: PropTypes.bool,
  actions: PropTypes.element,
};

export default Modal;
