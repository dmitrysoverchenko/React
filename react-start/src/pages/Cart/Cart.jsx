import React from "react";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const Cart = ({
  closeModal,
  isOpenModal,
  cart,
  favorite,
  favoriteHandler,
  cartHandler,
}) => (
  <>
    {cart.length ? (
      <ul className="cards-container">
        {cart.map((card) => (
          <Card
            key={card.id}
            card={card}
            favorite={favorite}
            favoriteHandler={favoriteHandler}
            modalHandler={cartHandler}
            trashCan={true}
          />
        ))}
      </ul>
    ) : (
      <h3>There are no products in the cart</h3>
    )}
    {isOpenModal && (
      <Modal
        modalHandler={closeModal}
        cancel={true}
        header={"Are you sure to delete it?"}
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

export default Cart;
