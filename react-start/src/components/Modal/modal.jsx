import React, { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  render() {
    const { header, text, actions, closeButton, closeModal, dataId } =
      this.props;

    return (
      <div
        className={"substrate"}
        data-id={dataId}
        onClick={(e) => closeModal(e)}
      >
        <div className={"wrapper"} onClick={(e) => e.preventDefault()}>
          <header className={"header"}>
            <h2 className={"title"}>{header}</h2>
            {closeButton && (
              <button
                className={"close-button"}
                data-id={dataId}
                onClick={(e) => closeModal(e)}
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

export default Modal;
