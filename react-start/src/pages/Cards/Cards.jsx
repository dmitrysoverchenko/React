import React, { useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./Cards.scss";
import { saveToLocalStorage } from "../../localStorage/saveToLocalStorage";

const Cards = ({ setCards, cards, cartHandler, favorite, favoriteHandler }) => {

  useEffect(() => {
    axios.get("sneakers.json").then((response) => {
      setCards(response.data);
      saveToLocalStorage("cards", response.data);
    });
  }, [setCards]);

  return (
    <>
      {
        <ul className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              favorite={favorite}
              modalHandler={cartHandler}
              favoriteHandler={favoriteHandler}
              addToCart={true}
            />
          ))}
        </ul>
      }
    </>
  );
};

export default Cards;
