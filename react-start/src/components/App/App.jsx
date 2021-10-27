import React from "react";
import Header from "../Header/Header";
import "./App.scss";
import AppRouter from "../AppRouter/AppRouter";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const { isOpen, header } = useSelector((state) => state.app.modal);

  return (
    <>
      <Header />
      <main className={"main"}>
        <AppRouter />
      </main>
      {isOpen && <Modal header={header} />}
    </>
  );
};

export default App;
