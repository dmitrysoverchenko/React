import React, { Component } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.scss";

class App extends Component {
  state = {
    isFirstModalOpen: false,
          isSecondModalOpen: false,
  };

  modalHandler = (e) => {
    const { isFirstModalOpen, isSecondModalOpen } = this.state;
    if (+e.target.dataset.id === 1) {
      this.setState({ isFirstModalOpen: !isFirstModalOpen });
    } else if (+e.target.dataset.id === 2) {
      this.setState({ isSecondModalOpen: !isSecondModalOpen });
    }
  };

  render() {
    const { isFirstModalOpen, isSecondModalOpen } = this.state;
    const firstModal = (
      <Modal
        header={"Do you want to delete this file?"}
        closeButton={true}
        dataId={1}
        closeModal={this.modalHandler}
        text={
          "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
        }
        actions={
          <>
            <Button
              backgroundColor={"#b3382c"}
              text={"Ok"}
              dataId={1}
              clickHandler={this.modalHandler}
            />
            <Button
              backgroundColor={"#b3382c"}
              text={"Cancel"}
              dataId={1}
              clickHandler={this.modalHandler}
            />
          </>
        }
      />
    );

    const secondModal = (
      <Modal
        header={"Lorem ipsum, dolor sit amet consectetur adipisicing elit?"}
        closeButton={true}
        dataId={2}
        closeModal={this.modalHandler}
        text={"Sapiente voluptas eaque molestiae corrupti ut"}
        actions={
          <>
            <Button
              backgroundColor={"#eee2ea"}
              text={"Yee, boy"}
              dataId={2}
              clickHandler={this.modalHandler}
            />
            <Button
              backgroundColor={"#eee2ea"}
              text={"No, tnx"}
              dataId={2}
              clickHandler={this.modalHandler}
            />
          </>
        }
      />
    );

    return (
      <div className="App">
        <Button
          backgroundColor={"#b3619a"}
          text="Open first modal"
          clickHandler={this.modalHandler}
          dataId={1}
        />
        <Button
          backgroundColor={"#617eb3"}
          text="Open second modal"
          clickHandler={this.modalHandler}
          dataId={2}
        />
        {isFirstModalOpen && firstModal}
        {isSecondModalOpen && secondModal}
      </div>
    );
  }
}

export default App;
