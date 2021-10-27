import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { favorite } = useSelector((state) => state.favorite);

  return (
    <>
      {favorite.length ? (
        <ul className={"cards-container"}>
          {favorite.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      ) : (
        <h3>Your favorites list is empty</h3>
      )}
    </>
  );
};

export default Favorite;
