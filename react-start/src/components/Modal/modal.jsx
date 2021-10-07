import React, {Component} from 'react';

class Modal extends Component {
  render() {
    const {header, text, actions, closeButton, closeModal, id} = this.props;

    return (
        <div className={"modal"} id={id} onClick={(e) => closeModal(e)}>
          <div className={"modal-wrapper"} onClick={(e) => e.preventDefault()}>
            <header className={"header"}>
              <h2 className={"title"}>{header}</h2>
              {closeButton && <button className={"close-button"} id={id} onClick={(e) => closeModal(e)}>x</button>}
            </header>
            <p className={"text"}>{text}</p>
            <div className={"action-wrapper"}>
              {actions}
            </div>
          </div>
        </div>
    );
  }
}

export default Modal;
