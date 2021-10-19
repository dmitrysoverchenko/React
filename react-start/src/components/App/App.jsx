import React, { useCallback, useState } from "react";
import Header from "../Header/Header";
import "./App.scss";
import AppRouter from "../AppRouter/AppRouter";
import { getFromLocalStorage } from "../../localStorage/getFromLocalStorage";
import { saveToLocalStorage } from "../../localStorage/saveToLocalStorage";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cart, setCart] = useState(getFromLocalStorage("cart") || []);
  const [cards, setCards] = useState(getFromLocalStorage("cards") || []);
  const [favorite, setFavorite] = useState(
    getFromLocalStorage("favorite") || []
  );

  const modalHandler = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const cartHandler = useCallback(
    (e, card) => {
      if (e.target.dataset.add) {
        if (!cart.map((e) => e.id).includes(card.id)) {
          const cartList = [...cart, card];
          modalHandler();
          setCart(cartList);
        }
      } else {
        const cartList = cart.filter((item) => item.id !== card.id);
        modalHandler();
        setCart(cartList);
      }
    },
    [cart, modalHandler]
  );

  const closeModal = useCallback(
    (e) => {
      if (e.target.dataset.cancel) {
        const cart = getFromLocalStorage("cart") || [];
        setCart(cart);
      } else {
        saveToLocalStorage("cart", cart);
      }
      modalHandler();
    },
    [cart, modalHandler]
  );

  const favoriteHandler = useCallback(
    (card) => {
      const newCardsList = favorite.map((e) => e.id).includes(card.id)
        ? favorite.filter((item) => item.id !== card.id)
        : [...favorite, card];
      setFavorite(newCardsList);
      saveToLocalStorage("favorite", newCardsList);
    },
    [favorite]
  );

  return (
    <>
      <Header />
      <main className={"main"}>
        <AppRouter
          setCards={setCards}
          cards={cards}
          cartHandler={cartHandler}
          favorite={favorite}
          favoriteHandler={favoriteHandler}
          cart={cart}
          isOpenModal={isOpenModal}
          closeModal={closeModal}
        />
      </main>
      {/* <Footer/> */}
      {isOpenModal && (
        <Modal
          modalHandler={closeModal}
          cancel={true}
          header={"Do you want to add it to the cart?"}
          actions={
            <>
              <Button
                backgroundColor={"#2a88e0"}
                text={"Ok"}
                clickHandler={closeModal}
              />
              <Button
                backgroundColor={"#2a88e0"}
                text={"Cancel"}
                clickHandler={closeModal}
                cancel={true}
              />
            </>
          }
        />
      )}
    </>
  );
};

export default App;
