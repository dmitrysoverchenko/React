import React from "react";
import Header from "./components/Header/Header";
import "./styles/App.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import Modal from "./components/Modal/Modal";
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
