import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length ? (
        <ul className={"cards-container"}>
          {cart.map((card) => (
            <Card key={card.id} card={card} trashCan={true} buyCan={false} />
          ))}
        </ul>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </>
  );
};

export default Cart;
