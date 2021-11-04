import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import Button from "../Button/Button";

const Modal = ({ header }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="substrate"
      onClick={() => dispatch(actions.setCartFromLocalStorage())}
    >
      <div
        className="wrapper"
        data-testid="modal-wrapper"
        onClick={(e) => e.preventDefault()}
      >
        <header className="header">
          <h2 className="title">{header}</h2>
          <button
            className="close-button"
            onClick={() => dispatch(actions.setCartFromLocalStorage())}
          >
            X
          </button>
        </header>
        <div className="action-wrapper">
          <Button backgroundColor="#2a88e0" text={"Ok"} confirm={true} />
          <Button backgroundColor="#2a88e0" text={"Cancel"} />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  modalHandler: PropTypes.func,
  cancel: PropTypes.bool,
  actions: PropTypes.element,
};

export default Modal;
