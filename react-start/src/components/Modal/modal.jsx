import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = ({ header, actions, modalHandler, cancel }) => (
  <div className="substrate" onClick={modalHandler} data-cancel={cancel}>
    <div className="wrapper" onClick={(e) => e.preventDefault()}>
      <header className="header">
        <h2 className="title">{header}</h2>
        <button
          className="close-button"
          onClick={modalHandler}
          data-cancel={cancel}
        >
          X
        </button>
      </header>
      <div className="action-wrapper">{actions}</div>
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
