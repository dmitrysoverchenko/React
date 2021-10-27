import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import "./Cards.scss";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/operations";
import actions from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.app);

  useEffect(() => {
    cards.length === 0
      ? dispatch(operations.fetchCards())
      : dispatch(actions.setLoader(false));
  }, [cards, dispatch]);

  return (
    <>
      {
        <ul className="cards-container">
          {cards.map((card) => (
            <Card key={card.id} card={card} buyCan />
          ))}
        </ul>
      }
    </>
  );
};

export default Cards;
