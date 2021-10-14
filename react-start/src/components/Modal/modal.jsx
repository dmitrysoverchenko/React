import React, { Component } from "react";
import "./modal.scss";
import PropTypes from "prop-types";

class Modal extends Component {
  render() {
    const { header, text, actions, closeModal, closeButton, dataId, cancel } = this.props;

    return (
      <div
        className={"substrate"}
        data-id={dataId}
        onClick={(e) => closeModal(e)}
        data-cancel={cancel}
      >
        <div className={"wrapper"} onClick={(e) => e.preventDefault()}>
          <header className={"header"}>
            <h2 className={"title"}>{header}</h2>
            {closeButton && (
              <button
                className={"close-button"}
                data-id={dataId}
                onClick={(e) => closeModal(e)}
                data-cancel={cancel}
              >
                X
              </button>
            )}
          </header>
          <p className={"text"}>{text}</p>
          <div className={"action-wrapper"}>{actions}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  dataId: PropTypes.number,
  closeModal: PropTypes.func,
  closeButton: PropTypes.func,
  cancel: PropTypes.bool,
  actions: PropTypes.element,
};

export default Modal;
