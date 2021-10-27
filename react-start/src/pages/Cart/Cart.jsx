import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import Subtitle from "../../components/Subtitle/Subtitle";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length ? (
        <ul className={"cards-container"}>
          {cart.map((card) => (
            <Card key={card.id} card={card} trashCan buyCan={false} />
          ))}
        </ul>
      ) : (
        <Subtitle text={"Your cart is empty"} />
      )}
    </>
  );
};

export default Cart;
