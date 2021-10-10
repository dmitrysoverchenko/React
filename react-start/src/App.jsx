import React, { Component } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import axios from "axios";

class App extends Component {
  state = {
    isFirstModalOpen: false,
    products: [],
  };

  componentDidMount() {
    axios.get("/sneakers.json").then((response) => {
      this.setState({ products: response.data });
    });
  }

  modalHandler = (e) => {
    const { isFirstModalOpen } = this.state;
    if (+e.target.dataset.id === 1) {
      this.setState({ isFirstModalOpen: !isFirstModalOpen });
    }
  };

  render() {
    const { isFirstModalOpen } = this.state;
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

    return (
      <div className="App">
        <Button
          backgroundColor={"#b3619a"}
          text="Open first modal"
          clickHandler={this.modalHandler}
          dataId={1}
        />
        {isFirstModalOpen && firstModal}
      </div>
    );
  }
}

export default App;
